import { createFileRoute } from "@tanstack/react-router";
import { streamReportDownload } from "@/lib/cloudinary.server";

export const Route = createFileRoute("/api/report-download/$token")({
  server: {
    handlers: {
      GET: ({ params }) => streamReportDownload(params.token),
    },
  },
});
