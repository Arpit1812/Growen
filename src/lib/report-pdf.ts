import {
  PDFDocument,
  StandardFonts,
  rgb,
  type PDFFont,
  type PDFPage,
} from "pdf-lib";
import { advice, calculate, items, stages } from "./assessment-data";

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 54;
const INK = rgb(0.18, 0.18, 0.18);
const MUTED = rgb(0.42, 0.38, 0.36);
const CREAM = rgb(0.95, 0.93, 0.9);
const OXBLOOD = rgb(0.56, 0.25, 0.3);
const BORDER = rgb(0.86, 0.83, 0.8);

function wrapText(text: string, font: PDFFont, size: number, width: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && font.widthOfTextAtSize(candidate, size) > width) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawWrapped(
  page: PDFPage,
  text: string,
  font: PDFFont,
  size: number,
  x: number,
  y: number,
  width: number,
  color = INK,
  lineHeight = size * 1.45,
) {
  for (const line of wrapText(text, font, size, width)) {
    page.drawText(line, { x, y, size, font, color });
    y -= lineHeight;
  }
  return y;
}

function drawHeader(page: PDFPage, regular: PDFFont, bold: PDFFont) {
  page.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - 82,
    width: PAGE_WIDTH,
    height: 82,
    color: INK,
  });
  page.drawCircle({
    x: MARGIN + 5,
    y: PAGE_HEIGHT - 41,
    size: 12,
    borderColor: CREAM,
    borderWidth: 1,
  });
  page.drawCircle({
    x: MARGIN + 5,
    y: PAGE_HEIGHT - 41,
    size: 4,
    color: OXBLOOD,
  });
  page.drawText("Growen", {
    x: MARGIN + 26,
    y: PAGE_HEIGHT - 46,
    size: 18,
    font: bold,
    color: CREAM,
  });
  page.drawText("REVENUE INFRASTRUCTURE ASSESSMENT", {
    x: PAGE_WIDTH - MARGIN - 230,
    y: PAGE_HEIGHT - 44,
    size: 8,
    font: regular,
    color: CREAM,
  });
}

export async function generateReportPdf(
  answers: Record<string, number | null>,
): Promise<Uint8Array> {
  const summary = calculate(answers);
  const document = await PDFDocument.create();
  document.setTitle("Growen Revenue Infrastructure Assessment");
  document.setAuthor("Growen");
  document.setSubject("Personalized assessment results and recommendations");
  document.setCreator("Growen");
  document.setCreationDate(new Date());

  const regular = await document.embedFont(StandardFonts.Helvetica);
  const bold = await document.embedFont(StandardFonts.HelveticaBold);

  const overview = document.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  drawHeader(overview, regular, bold);
  let y = PAGE_HEIGHT - 126;
  overview.drawText("YOUR PERSONALIZED SNAPSHOT", {
    x: MARGIN,
    y,
    size: 9,
    font: bold,
    color: OXBLOOD,
  });
  y -= 42;
  overview.drawText("Revenue infrastructure,", {
    x: MARGIN,
    y,
    size: 29,
    font: bold,
    color: INK,
  });
  y -= 36;
  overview.drawText("made visible.", {
    x: MARGIN,
    y,
    size: 29,
    font: regular,
    color: OXBLOOD,
  });
  y -= 54;
  y = drawWrapped(
    overview,
    "This report summarizes your self-reported answers across five stages. It is a directional snapshot, not a verified audit of your systems.",
    regular,
    11,
    MARGIN,
    y,
    PAGE_WIDTH - MARGIN * 2,
    MUTED,
  );
  y -= 20;

  overview.drawRectangle({
    x: MARGIN,
    y: y - 78,
    width: PAGE_WIDTH - MARGIN * 2,
    height: 92,
    color: INK,
  });
  overview.drawText(summary.overall === null ? "—" : `${summary.overall}%`, {
    x: MARGIN + 22,
    y: y - 42,
    size: 34,
    font: bold,
    color: CREAM,
  });
  overview.drawText("OVERALL SCORE", {
    x: MARGIN + 145,
    y: y - 32,
    size: 9,
    font: bold,
    color: CREAM,
  });
  overview.drawText(summary.category ?? "Limited coverage", {
    x: MARGIN + 145,
    y: y - 51,
    size: 16,
    font: bold,
    color: CREAM,
  });
  overview.drawText(
    `${summary.coverageLabel} · ${summary.scored} of ${items.length} questions answered`,
    {
      x: MARGIN + 145,
      y: y - 68,
      size: 9,
      font: regular,
      color: rgb(0.78, 0.75, 0.72),
    },
  );
  y -= 114;

  overview.drawText("STAGE BREAKDOWN", {
    x: MARGIN,
    y,
    size: 9,
    font: bold,
    color: OXBLOOD,
  });
  y -= 24;
  for (const stage of stages) {
    const score = summary.stage[stage];
    overview.drawText(stage, {
      x: MARGIN,
      y,
      size: 10,
      font: bold,
      color: INK,
    });
    overview.drawRectangle({
      x: MARGIN + 112,
      y: y - 2,
      width: 270,
      height: 9,
      color: BORDER,
    });
    if (score !== null) {
      overview.drawRectangle({
        x: MARGIN + 112,
        y: y - 2,
        width: (270 * score) / 100,
        height: 9,
        color: OXBLOOD,
      });
    }
    overview.drawText(score === null ? "—" : `${score}%`, {
      x: MARGIN + 400,
      y,
      size: 10,
      font: bold,
      color: INK,
    });
    y -= 30;
  }

  y -= 2;
  overview.drawText("WHERE TO START", {
    x: MARGIN,
    y,
    size: 9,
    font: bold,
    color: OXBLOOD,
  });
  y -= 19;
  const priorities = summary.lowest.length > 0 ? summary.lowest : stages;
  for (const stage of priorities) {
    y = drawWrapped(
      overview,
      `${stage}: ${advice[stage]}`,
      regular,
      10,
      MARGIN,
      y,
      PAGE_WIDTH - MARGIN * 2,
    );
    y -= 5;
  }

  for (const stage of stages) {
    const page = document.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeader(page, regular, bold);
    y = PAGE_HEIGHT - 126;
    page.drawText(stage, {
      x: MARGIN,
      y,
      size: 24,
      font: bold,
      color: INK,
    });
    const score = summary.stage[stage];
    page.drawText(score === null ? "—" : `${score}%`, {
      x: PAGE_WIDTH - MARGIN - 78,
      y: y + 2,
      size: 22,
      font: bold,
      color: OXBLOOD,
    });
    y -= 20;
    page.drawText("STAGE SCORE", {
      x: PAGE_WIDTH - MARGIN - 76,
      y,
      size: 7,
      font: regular,
      color: MUTED,
    });
    y -= 32;
    y = drawWrapped(
      page,
      advice[stage],
      regular,
      12,
      MARGIN,
      y,
      PAGE_WIDTH - MARGIN * 2,
      MUTED,
    );
    y -= 24;

    for (const item of items.filter((question) => question.stage === stage)) {
      page.drawText(item.id, {
        x: MARGIN,
        y,
        size: 8,
        font: bold,
        color: OXBLOOD,
      });
      y -= 16;
      y = drawWrapped(
        page,
        item.text,
        bold,
        11,
        MARGIN,
        y,
        PAGE_WIDTH - MARGIN * 2,
      );
      y -= 8;
      const answer = answers[item.id];
      const selected =
        answer === null
          ? "Not sure (scored as 0)"
          : `${String.fromCharCode(65 + (answer ?? 0))}. ${item.choices[answer ?? 0]}`;
      y = drawWrapped(
        page,
        `YOUR RESPONSE: ${selected}`,
        regular,
        10,
        MARGIN + 12,
        y,
        PAGE_WIDTH - MARGIN * 2 - 12,
        MUTED,
      );
      y -= 22;
    }
  }

  const pages = document.getPages();
  pages.forEach((page, index) => {
    page.drawLine({
      start: { x: MARGIN, y: 42 },
      end: { x: PAGE_WIDTH - MARGIN, y: 42 },
      thickness: 0.6,
      color: BORDER,
    });
    page.drawText("GROWEN · A DIRECTIONAL, SELF-REPORTED SNAPSHOT", {
      x: MARGIN,
      y: 26,
      size: 7,
      font: regular,
      color: MUTED,
    });
    page.drawText(`${index + 1} / ${pages.length}`, {
      x: PAGE_WIDTH - MARGIN - 48,
      y: 26,
      size: 8,
      font: regular,
      color: MUTED,
    });
  });

  return document.save();
}
