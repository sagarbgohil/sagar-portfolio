import {
  ABOUT,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  SKILL_GROUPS,
  siteData,
} from "@/lib/constants";

function buildMarkdown() {
  const lines = [];

  const location = ABOUT.meta.find((m) => m.k === "based")?.v ?? "";
  const expYears = ABOUT.meta.find((m) => m.k === "experience")?.v ?? "";

  lines.push("# Sagar Gohil - Full-Stack Software Engineer");
  lines.push("");
  lines.push(`**Location:** ${location}  `);
  lines.push(`**Email:** ${siteData.email}  `);
  lines.push(`**Experience:** ${expYears}  `);
  lines.push(`**Resume:** ${siteData.resumeLink}`);
  lines.push("");

  lines.push("## About");
  lines.push("");
  lines.push(`${ABOUT.leadStart} ${ABOUT.leadAmber}`);
  lines.push("");
  lines.push(ABOUT.body);
  lines.push("");

  lines.push("## Skills");
  lines.push("");
  for (const group of SKILL_GROUPS) {
    lines.push(`**${group.name}:** ${group.items.join(", ")}`);
  }
  lines.push("");

  lines.push("## Experience");
  lines.push("");
  for (const item of EXPERIENCE) {
    lines.push(`### ${item.title}`);
    lines.push(`**${item.where}** | ${item.when}`);
    lines.push("");
    lines.push(item.desc);
    lines.push("");
  }

  lines.push("## Education");
  lines.push("");
  for (const item of EDUCATION) {
    lines.push(`### ${item.title}`);
    lines.push(`**${item.where}** | ${item.when}`);
    lines.push("");
    lines.push(item.desc);
    lines.push("");
  }

  lines.push("## Projects");
  lines.push("");
  for (const item of PROJECTS) {
    lines.push(`### ${item.index}. ${item.title}`);
    lines.push("");
    lines.push(item.description);
    lines.push("");
    lines.push(`**Tech Stack:** ${item.stack.join(", ")}`);
    if (item.link) lines.push(`**Link:** ${item.link}`);
    lines.push("");
  }

  return lines.join("\n");
}

export async function GET() {
  const markdown = buildMarkdown();
  const byteLength = new TextEncoder().encode(markdown).length;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(byteLength),
    },
  });
}
