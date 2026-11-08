const REPORT_FOLDER = "growdoc/reports";
const REPORT_EXPIRY_SECONDS = 7 * 24 * 60 * 60;

type CloudinaryAsset = {
  publicId: string;
  version: number;
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }
  return value;
}

function base64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}

function fromBase64Url(value: string) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const binary = atob(
    normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "="),
  );
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function digest(algorithm: "SHA-1" | "SHA-256", value: string) {
  return new Uint8Array(
    await crypto.subtle.digest(algorithm, new TextEncoder().encode(value)),
  );
}

async function uploadSignature(params: Record<string, string>, secret: string) {
  const serialized = Object.entries(params)
    .filter(([, value]) => value !== "")
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const hash = await digest("SHA-1", `${serialized}${secret}`);
  return Array.from(hash, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

export async function uploadAuthenticatedReport(
  pdf: Uint8Array,
): Promise<CloudinaryAsset> {
  const cloudName = requiredEnv("CLOUDINARY_CLOUD_NAME");
  const apiKey = requiredEnv("CLOUDINARY_API_KEY");
  const apiSecret = requiredEnv("CLOUDINARY_API_SECRET");
  if (!/^[a-z0-9-]+$/i.test(cloudName)) {
    throw new Error(
      "CLOUDINARY_CLOUD_NAME must be the Cloudinary cloud identifier.",
    );
  }

  const assetId = crypto.randomUUID().replaceAll("-", "");
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params = {
    folder: REPORT_FOLDER,
    public_id: assetId,
    timestamp,
    type: "authenticated",
    upload_preset: "growdoc_reports",
  };
  const signature = await uploadSignature(params, apiSecret);
  const form = new FormData();
  for (const [key, value] of Object.entries(params)) form.append(key, value);
  form.append("api_key", apiKey);
  form.append("signature", signature);
  const pdfBuffer = new ArrayBuffer(pdf.byteLength);
  new Uint8Array(pdfBuffer).set(pdf);
  form.append(
    "file",
    new Blob([pdfBuffer], { type: "application/pdf" }),
    "growdoc-report.pdf",
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: form },
  );
  const result = (await response.json()) as {
    public_id?: unknown;
    version?: unknown;
    resource_type?: unknown;
    type?: unknown;
    format?: unknown;
    asset_folder?: unknown;
  };
  if (!response.ok) {
    throw new Error(`Cloudinary upload failed with status ${response.status}.`);
  }
  if (
    result["resource_type"] !== "image" ||
    result["type"] !== "authenticated" ||
    result["format"] !== "pdf" ||
    typeof result["version"] !== "number" ||
    typeof result["public_id"] !== "string" ||
    !new RegExp(`^(?:${REPORT_FOLDER}/)?${assetId}$`).test(
      result["public_id"],
    ) ||
    result["asset_folder"] !== REPORT_FOLDER
  ) {
    throw new Error("Cloudinary returned unexpected report asset metadata.");
  }
  return {
    publicId: result["public_id"],
    version: result["version"],
  };
}

type AccessPayload = {
  publicId: string;
  version: number;
  expiresAt: number;
  nonce: string;
};

export async function createDownloadToken(asset: CloudinaryAsset) {
  const expiresAt = Math.floor(Date.now() / 1000) + REPORT_EXPIRY_SECONDS;
  const payload: AccessPayload = {
    ...asset,
    expiresAt,
    nonce: base64Url(crypto.getRandomValues(new Uint8Array(24))),
  };
  const encoded = base64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(requiredEnv("CLOUDINARY_API_SECRET")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(encoded)),
  );
  return { token: `${encoded}.${base64Url(signature)}`, expiresAt };
}

async function verifyDownloadToken(
  token: string,
): Promise<AccessPayload | null> {
  if (token.length > 2048 || !/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token)) {
    return null;
  }
  const parts = token.split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
  const [encoded, encodedSignature] = parts;
  let payload: Record<string, unknown>;
  let signature: Uint8Array;
  try {
    const parsed: unknown = JSON.parse(
      new TextDecoder().decode(fromBase64Url(encoded)),
    );
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }
    payload = parsed as Record<string, unknown>;
    signature = fromBase64Url(encodedSignature);
  } catch {
    return null;
  }
  if (
    typeof payload["publicId"] !== "string" ||
    !/^(?:growdoc\/reports\/)?[a-f0-9]{32}$/.test(payload["publicId"]) ||
    typeof payload["version"] !== "number" ||
    !Number.isSafeInteger(payload["version"]) ||
    typeof payload["expiresAt"] !== "number" ||
    !Number.isSafeInteger(payload["expiresAt"]) ||
    payload["expiresAt"] <= Math.floor(Date.now() / 1000) ||
    typeof payload["nonce"] !== "string" ||
    payload["nonce"].length < 20
  ) {
    return null;
  }
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(requiredEnv("CLOUDINARY_API_SECRET")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );
  const signatureBuffer = new Uint8Array(signature.length);
  signatureBuffer.set(signature);
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    signatureBuffer.buffer,
    new TextEncoder().encode(encoded),
  );
  return valid
    ? {
        publicId: payload["publicId"],
        version: payload["version"],
        expiresAt: payload["expiresAt"],
        nonce: payload["nonce"],
      }
    : null;
}

async function authenticatedDeliveryUrl(asset: AccessPayload) {
  const cloudName = requiredEnv("CLOUDINARY_CLOUD_NAME");
  const apiSecret = requiredEnv("CLOUDINARY_API_SECRET");
  const signedPath = `v${asset.version}/${asset.publicId}.pdf`;
  const signature = base64Url(
    await digest("SHA-1", `${signedPath}${apiSecret}`),
  ).slice(0, 8);
  return `https://res.cloudinary.com/${cloudName}/image/authenticated/s--${signature}--/${signedPath}`;
}

export async function streamReportDownload(token: string): Promise<Response> {
  const asset = await verifyDownloadToken(token);
  if (!asset) {
    return new Response("This report link is invalid or has expired.", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
  }

  const assetResponse = await fetch(await authenticatedDeliveryUrl(asset));
  if (!assetResponse.ok || !assetResponse.body) {
    return new Response("This report is no longer available.", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
  }
  return new Response(assetResponse.body, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition":
        'attachment; filename="Growen-Revenue-Infrastructure-Report.pdf"',
      "cache-control": "private, no-store",
      "x-content-type-options": "nosniff",
      "content-security-policy": "sandbox",
    },
  });
}
