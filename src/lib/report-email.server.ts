import { Resend } from "resend";
import { calculate, stages, type Stage } from "./assessment-data";

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }
  return value;
}

export async function sendReportEmail(
  email: string,
  downloadUrl: string,
  expiresAt: number,
  answers: Record<string, number | null>,
) {
  const resend = new Resend(requiredEnv("RESEND_API_KEY"));
  const sender = requiredEnv("RESEND_FROM_EMAIL");
  const summary = calculate(answers);
  const scores = stages
    .map(
      (stage: Stage) =>
        `${stage}: ${summary.stage[stage] === null ? "Not scored" : `${summary.stage[stage]}%`}`,
    )
    .join("\n");
  const expiryLabel = new Date(expiresAt * 1000).toUTCString();
  const { data, error } = await resend.emails.send({
    from: sender,
    to: email,
    subject: "Your Growen Revenue Infrastructure Assessment report",
    html: `
      <!doctype html>
      <html lang="en">
        <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
        <body style="margin:0;background:#f1ece6;font-family:Arial,Helvetica,sans-serif;color:#2e2e2e">
          <div style="max-width:600px;margin:0 auto;padding:32px 18px">
            <div style="background:#2e2e2e;padding:24px 28px;border-radius:14px 14px 0 0">
              <span style="color:#f1ece6;font-size:22px;font-weight:700">Growen</span>
              <div style="margin-top:5px;color:#c47780;font-size:11px;letter-spacing:2px">REVENUE INFRASTRUCTURE</div>
            </div>
            <div style="background:#fff;padding:32px 28px;border-radius:0 0 14px 14px">
              <p style="margin:0 0 12px;color:#8f414d;font-size:12px;font-weight:700;letter-spacing:1.5px">YOUR ASSESSMENT IS COMPLETE</p>
              <h1 style="margin:0 0 16px;font-size:26px;line-height:1.25">Your personalized report is ready.</h1>
              <p style="margin:0 0 22px;color:#625b56;line-height:1.65">Your report brings together your answers, stage-by-stage scores, and practical opportunities to strengthen your revenue infrastructure.</p>
              <div style="margin:24px 0;padding:18px 20px;background:#f1ece6;border-radius:10px">
                <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:1px;color:#8f414d">YOUR STAGE SCORES</p>
                <p style="margin:0;line-height:1.8;white-space:pre-line">${scores}</p>
              </div>
              <p style="margin:26px 0;text-align:center">
                <a href="${downloadUrl}" style="display:inline-block;padding:15px 26px;background:#8f414d;border-radius:999px;color:#fff;text-decoration:none;font-weight:700">Download your report</a>
              </p>
              <p style="margin:0 0 12px;color:#625b56;font-size:13px;line-height:1.6">This private download link expires on <strong>${expiryLabel}</strong>. You can also copy this URL into your browser:</p>
              <p style="margin:0 0 26px;word-break:break-all;font-size:12px"><a href="${downloadUrl}" style="color:#8f414d">${downloadUrl}</a></p>
              <hr style="border:0;border-top:1px solid #e1dcd7;margin:24px 0">
              <p style="margin:0;color:#756c66;font-size:12px;line-height:1.6">Growen · Revenue infrastructure for B2B technology teams.<br>This is a self-reported, directional assessment—not a verified audit.</p>
            </div>
          </div>
        </body>
      </html>`,
    text: `Your Growen Revenue Infrastructure Assessment is complete.\n\nYour report includes your answers, stage-by-stage scores, and practical improvement opportunities.\n\n${scores}\n\nDownload your report: ${downloadUrl}\n\nThis private download link expires on ${expiryLabel}.\n\nGrowen · Revenue infrastructure for B2B technology teams.\nThis is a self-reported, directional assessment—not a verified audit.`,
  });
  if (error || !data?.id) {
    throw new Error("Resend could not accept the report delivery email.");
  }
  return data.id;
}
