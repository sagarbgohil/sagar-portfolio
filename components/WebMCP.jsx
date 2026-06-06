"use client";

import { useEffect } from "react";
import {
  ABOUT,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  SKILL_GROUPS,
} from "@/lib/constants";

const tools = [
  {
    name: "get_projects",
    description:
      "Returns the list of projects Sagar Gohil has worked on, including title, description, tech stack, and link.",
    inputSchema: { type: "object", properties: {}, required: [] },
    execute: async () =>
      PROJECTS.map(({ index, title, year, description, stack, link }) => ({
        index,
        title,
        year,
        description,
        techStack: stack,
        link,
      })),
  },
  {
    name: "get_skills",
    description: "Returns Sagar's technical skills grouped by category.",
    inputSchema: { type: "object", properties: {}, required: [] },
    execute: async () =>
      SKILL_GROUPS.map(({ name, items }) => ({ group: name, items })),
  },
  {
    name: "get_experience",
    description: "Returns Sagar's work experience history.",
    inputSchema: { type: "object", properties: {}, required: [] },
    execute: async () =>
      EXPERIENCE.map(({ when, title, where, desc }) => ({
        title,
        company: where,
        period: when,
        description: desc,
      })),
  },
  {
    name: "get_education",
    description: "Returns Sagar's educational background.",
    inputSchema: { type: "object", properties: {}, required: [] },
    execute: async () =>
      EDUCATION.map(({ when, title, where, desc }) => ({
        title,
        institution: where,
        period: when,
        description: desc,
      })),
  },
  {
    name: "get_about",
    description:
      "Returns Sagar's profile summary including name, email, location, and experience.",
    inputSchema: { type: "object", properties: {}, required: [] },
    execute: async () => ({
      summary: `${ABOUT.leadStart} ${ABOUT.leadAmber}`,
      body: ABOUT.body,
      details: Object.fromEntries(ABOUT.meta.map((m) => [m.k, m.v])),
    }),
  },
  {
    name: "contact",
    description:
      "Sends a hire/contact inquiry to Sagar Gohil. Use this to reach out about backend, frontend, fullstack work, or bug fixing.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Your full name" },
        email: {
          type: "string",
          format: "email",
          description: "Your email address",
        },
        phone: {
          type: "string",
          description: "Your phone number (10–12 digits)",
        },
        service: {
          type: "string",
          enum: [
            "Backend Development",
            "Frontend Development",
            "Web App Development",
            "Bug Fixing",
          ],
          description: "The service you need",
        },
        message: {
          type: "string",
          minLength: 50,
          maxLength: 1000,
          description: "Your message (50–1000 characters)",
        },
      },
      required: ["name", "email", "phone", "service", "message"],
    },
    execute: async ({ name, email, phone, service, message }) => {
      const res = await fetch("/api/internal/misc/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Contact request failed");
      return { success: true, message: data.message };
    },
  },
];

export default function WebMCP() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.modelContext) return;

    navigator.modelContext.provideContext({ tools }).catch(() => {});
  }, []);

  return null;
}
