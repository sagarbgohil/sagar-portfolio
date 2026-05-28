import {
  about,
  experience,
  education,
  projects,
  skills,
  siteData,
} from "@/lib/constants";

function buildMarkdown() {
  const lines = [];

  const email = about.items.find((i) => i.name === "Email")?.value ?? "";
  const location = about.items.find((i) => i.name === "Location")?.value ?? "";
  const expYears = about.items.find((i) => i.name === "Experience")?.value ?? "";

  lines.push("# Sagar Gohil — Full-Stack Software Engineer");
  lines.push("");
  lines.push(`**Location:** ${location}  `);
  lines.push(`**Email:** ${email}  `);
  lines.push(`**Experience:** ${expYears}  `);
  lines.push(`**Resume:** ${siteData.resumeLink}`);
  lines.push("");

  lines.push("## About");
  lines.push("");
  lines.push(about.description);
  lines.push("");

  lines.push("## Skills");
  lines.push("");
  lines.push(skills.description);
  lines.push("");
  lines.push(skills.items.map((s) => s.name).join(", "));
  lines.push("");

  lines.push("## Experience");
  lines.push("");
  for (const item of experience.items) {
    lines.push(`### ${item.title}`);
    lines.push(`**${item.bottom}** | ${item.top}`);
    lines.push("");
    lines.push(item.description);
    lines.push("");
  }

  lines.push("## Education");
  lines.push("");
  for (const item of education.items) {
    lines.push(`### ${item.title}`);
    lines.push(`**${item.bottom}** | ${item.top}`);
    lines.push("");
    lines.push(item.description);
    lines.push("");
  }

  lines.push("## Projects");
  lines.push("");
  for (const item of projects.items) {
    lines.push(`### ${item.index}. ${item.title}`);
    lines.push("");
    lines.push(item.description);
    lines.push("");
    lines.push(`**Tech Stack:** ${item.techStack.join(", ")}`);
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
