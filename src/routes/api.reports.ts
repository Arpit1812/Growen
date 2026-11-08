import { createFileRoute } from "@tanstack/react-router";
import { calculate, items } from "@/lib/assessment-data";
import {
  uploadAuthenticatedReport,
  createDownloadToken,
} from "@/lib/cloudinary.server";
import { generateReportPdf } from "@/lib/report-pdf";
import { sendReportEmail } from "@/lib/report-email.server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 16 * 1024;
const ALLOWED_ANSWER_IDS = new Set(items.map((item) => item.id));

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function validateAnswers(
  value: unknown,
): value is Record<string, number | null> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const entries = Object.entries(value);
  return (
    entries.length === ALLOWED_ANSWER_IDS.size &&
    entries.every(
      ([id, answer]) =>
        ALLOWED_ANSWER_IDS.has(id) &&
        (answer === null ||
          (typeof answer === "number" &&
            Number.isInteger(answer) &&
            answer >= 0 &&
            answer <= 3)),
    )
  );
}

function getPublicOrigin() {
  const configuredOrigin =
    process.env["PUBLIC_APP_URL"]?.trim() || "https://thegrowen.com";
  try {
    const url = new URL(configuredOrigin);
    if (
      (url.protocol !== "https:" &&
        !(url.protocol === "http:" && url.hostname === "localhost")) ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    ) {
      return null;
    }
    return url.origin;
  } catch {
    return null;
  }
}

async function submitReport(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonResponse({ error: "Expected a JSON request." }, 415);
  }
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: "Request is too large." }, 413);
  }

  const bodyText = await request.text();
  if (new TextEncoder().encode(bodyText).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: "Request is too large." }, 413);
  }
  let payload: unknown;
  try {
    payload = JSON.parse(bodyText);
  } catch {
    return jsonResponse({ error: "Invalid JSON request." }, 400);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonResponse({ error: "Invalid report request." }, 400);
  }
  const submission = payload as Record<string, unknown>;
  const email =
    typeof submission["email"] === "string" ? submission["email"].trim() : "";
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return jsonResponse({ error: "Enter a valid email address." }, 400);
  }
  const answerData = submission["answers"];
  if (!validateAnswers(answerData)) {
    return jsonResponse({ error: "Complete all assessment questions." }, 400);
  }

  const answers = answerData;
  const summary = calculate(answers);
  if (summary.overall === null) {
    return jsonResponse({ error: "Assessment coverage is insufficient." }, 400);
  }
  const cloudName = process.env["CLOUDINARY_CLOUD_NAME"]?.trim() ?? "";
  const requiredConfiguration = [
    cloudName,
    process.env["CLOUDINARY_API_KEY"]?.trim(),
    process.env["CLOUDINARY_API_SECRET"]?.trim(),
    process.env["RESEND_API_KEY"]?.trim(),
    process.env["RESEND_FROM_EMAIL"]?.trim(),
  ];
  const publicOrigin = getPublicOrigin();
  if (
    requiredConfiguration.some((value) => !value) ||
    !/^[a-z0-9-]+$/i.test(cloudName) ||
    !publicOrigin
  ) {
    return jsonResponse({ error: "Report delivery is not configured." }, 503);
  }

  let pdf: Uint8Array;
  try {
    pdf = await generateReportPdf(answers);
  } catch {
    return jsonResponse({ error: "We couldn’t generate your report." }, 500);
  }

  let asset;
  try {
    asset = await uploadAuthenticatedReport(pdf);
  } catch {
    return jsonResponse(
      { error: "We couldn’t securely store your report." },
      502,
    );
  }

  let downloadToken: { token: string; expiresAt: number };
  try {
    downloadToken = await createDownloadToken(asset);
  } catch {
    return jsonResponse(
      { error: "We couldn’t create a secure report link." },
      500,
    );
  }

  const downloadUrl = `${publicOrigin}/api/report-download/${downloadToken.token}`;

  try {
    await sendReportEmail(email, downloadUrl, downloadToken.expiresAt, answers);
  } catch {
    return jsonResponse({ error: "We couldn’t send your report email." }, 502);
  }
  return jsonResponse({ success: true }, 200);
}

export const Route = createFileRoute("/api/reports")({
  server: {
    handlers: {
      POST: ({ request }) => submitReport(request),
    },
  },
});
