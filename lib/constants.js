/* ============================================================
   lib/constants.js — single source of truth for all site data
   ============================================================ */

const CURRENT_YEAR = new Date().getFullYear();
const START_YEAR = 2023;
export const YEARS_EXP = CURRENT_YEAR - START_YEAR;

/* ---- site meta ---- */
export const siteData = {
  name: "Sagar Gohil",
  role: "Backend-leaning Full-Stack Engineer",
  email: "connect@sagargohil.dev",
  location: "Gujarat, India",
  resumeLink:
    "https://drive.google.com/drive/folders/1ApF25IVROm5FTRqv19HJ3HELVHtQWk1-?usp=sharing",
  baseUrl: "https://www.sagargohil.dev",
  cloudfront: {
    photoUrl: "https://drh6po6q1h65p.cloudfront.net/photo-trans.png",
  },
};

/* ---- navigation ---- */
export const NAV = [
  { name: "home", href: "#top" },
  { name: "work", href: "#projects" },
  { name: "skills", href: "#skills" },
  { name: "about", href: "#about" },
  { name: "journey", href: "#journey" },
];

/* ---- socials ---- */
export const SOCIALS = [
  { label: "github", href: "https://github.com/sagarbgohil" },
  { label: "linkedin", href: "https://www.linkedin.com/in/gohilsagar" },
  { label: "gitlab", href: "https://gitlab.com/sagarbgohil" },
  { label: "x.com", href: "https://x.com/SagarbGohil" },
  { label: "email", href: "mailto:connect@sagargohil.dev" },
];

/* ---- stats ---- */
export const STATS = [
  { num: YEARS_EXP, suffix: "+", label: "years shipping" },
  { num: 12, suffix: "+", label: "projects delivered" },
  { num: 24, suffix: "+", label: "tools in the kit" },
  { num: 8, suffix: "+", label: "clients & teams" },
];

/* ---- projects ---- */
export const PROJECTS = [
  {
    index: "01",
    title: "Urbanhelps",
    year: "2024",
    link: "https://urbanhelps.in",
    stack: ["Node.js", "MongoDB", "React", "Next.js"],
    description:
      "An online consultation platform. I built the backend for bookings, live chat and sessions, wired up Cashfree payments, and wrote the customer↔provider matching algorithm that keeps the marketplace balanced.",
  },
  {
    index: "02",
    title: "Susuda: Football Club Management",
    year: "2024",
    link: "",
    stack: ["NestJS", "PostgreSQL", "Prisma", "Docker"],
    description:
      "Designed the coupon-generation logic and rarity management for a football club game, then optimized the PostgreSQL queries with Prisma so it stayed fast as the player base grew.",
  },
  {
    index: "03",
    title: "Stile: Social Media App",
    year: "2023",
    link: "https://stile-country.com",
    stack: ["Node.js", "MongoDB", "Socket.io", "React", "Swagger"],
    description:
      "Posts, comments, media uploads and live messaging over WebSockets. The features that turn a feed into a community and keep people coming back.",
  },
  {
    index: "04",
    title: "Vebuin: Disaster Management",
    year: "2024",
    link: "",
    stack: ["NestJS", "PostgreSQL", "AWS", "Lambda"],
    description:
      "Real-time disaster alerts and tracking built on a serverless AWS stack: Lambda, ECR, S3 and API Gateway: integrated with SaaS APIs and a CRM so responders always have a live picture.",
  },
  {
    index: "05",
    title: "Bellboy: Live Order Delivery",
    year: "2023",
    link: "",
    stack: ["Node.js", "Socket.io", "Kafka", "Redis"],
    description:
      "Real-time chat and live location sharing over WebSockets, with Kafka event streams and Redis caching to keep order tracking snappy under load.",
  },
  {
    index: "06",
    title: "Limber Sports",
    year: "2023",
    link: "",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    description:
      "Contributed to the club and admin panels and the backend communication flows that keep operations moving smoothly across the platform.",
  },
  {
    index: "07",
    title: "Forward From Love",
    year: "2023",
    link: "",
    stack: ["Next.js", "React", "Node.js", "REST"],
    description:
      "Built and integrated an NGO website end-to-end, reliable APIs, clean data flow, and a responsive experience that helps a good cause reach more people.",
  },
  {
    index: "08",
    title: "Chowis: Healthcare CRM",
    year: "2023",
    link: "https://www.chowis.com",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Swagger"],
    description:
      "A scalable CRM for managing doctors, patients and diseases, built with NestJS and TypeORM on PostgreSQL, documented with Swagger so the team could move fast.",
  },
  {
    index: "09",
    title: "Agriguru: Import/Export Management",
    year: "2023",
    link: "",
    stack: ["Node.js", "MongoDB", "NestJS", "Swagger"],
    description:
      "Product listings, taxes, contracts, inquiries and real-time performance analytics for an agri trade platform. The connective tissue of a B2B marketplace.",
  },
  {
    index: "10",
    title: "Thingslinker: IoT Data",
    year: "2023",
    link: "",
    stack: ["Node.js", "PostgreSQL", "Redis", "NestJS"],
    description:
      "Processed and visualized large IoT datasets with real-time analytics on Redis and PostgreSQL, containerized with Docker for reliable deploys.",
  },
  {
    index: "11",
    title: "E-Healthcard",
    year: "2022",
    link: "",
    stack: ["Python", "Flask", "SQLite", "Android"],
    description:
      "An Android app for managing patient health records, with APIs that sync data cleanly between the device and the backend.",
  },
  {
    index: "12",
    title: "Dughdham: Smart India Hackathon",
    year: "2022",
    link: "",
    stack: ["Node.js", "MongoDB", "React", "Google Pay"],
    description:
      "A dairy delivery platform built for the Smart India Hackathon, with secure Google Pay payments wired into a Node.js backend.",
  },
];

export const PROJECT_FILTERS = [
  "all",
  "Node.js",
  "NestJS",
  "Next.js",
  "React",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Socket.io",
];

/* ---- skills ---- */
export const SKILL_GROUPS = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "Java"],
  },
  {
    name: "Backend & APIs",
    items: ["Node.js", "NestJS", "Express", "GraphQL", "REST", "Socket.io"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS", "Bootstrap", "MUI"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM"],
  },
  {
    name: "Infra & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Kafka", "CI/CD", "Swagger"],
  },
  {
    name: "Quality",
    items: ["Jest", "Mocha", "Clean Arch", "Stripe", "Cashfree", "Google Pay"],
  },
];

/* ---- about ---- */
export const ABOUT = {
  leadStart:
    "I'm a backend-leaning full-stack engineer who likes the quiet, unglamorous parts of software.",
  leadAmber:
    "the schemas, the queues, the things that have to not break at 3am.",
  body: `Over ${YEARS_EXP}+ years I've designed and shipped scalable backend systems and full-stack apps, mostly with Node.js, NestJS, PostgreSQL, MongoDB and Redis on the backend and React/Next.js on the front. I lean on clean architecture so systems stay maintainable long after launch, and I care about the details, clear APIs, sensible data flow, and tests that let the next person move fast.`,
  meta: [
    { k: "name", v: "Sagar Gohil" },
    { k: "based", v: "Gujarat, India" },
    { k: "focus", v: "Backend / Full-stack", amber: true },
    { k: "experience", v: `${YEARS_EXP}+ years` },
    { k: "languages", v: "EN · HI · GU" },
    // { k: "status", v: "not looking" },
  ],
};

/* ---- experience ---- */
export const EXPERIENCE = [
  {
    when: "04/2026 — present",
    title: "Senior Software Engineer",
    where: "WNexus · GJ, India",
    desc: "Building and scaling backend systems and full-stack products as part of the core engineering team.",
  },
  {
    when: "01/2025 — 03/2026",
    title: "Software Engineer",
    where: "Freelance · Remote",
    desc: "Delivered end-to-end backend and full-stack solutions for clients across multiple domains: APIs, data pipelines, and cloud infrastructure.",
  },
  {
    when: "01/2024 — 01/2024",
    title: "Software Engineer",
    where: "Notion Infosoft · GJ, India",
    desc: "Designed and shipped web applications with a focus on backend development, database design and keeping systems reliable as they scale.",
  },
  {
    when: "01/2023 — 06/2023",
    title: "Backend Developer Intern",
    where: "Toddle — Your Teaching Partner · KA, India",
    desc: "Hands-on product engineering across the stack, contributing to features used by real classrooms.",
  },
  {
    when: "05/2022 — 07/2022",
    title: "Backend Developer Intern",
    where: "Encore Research · GJ, India",
    desc: "First taste of professional backend work, building APIs and learning how production systems hold together.",
  },
];

/* ---- education ---- */
export const EDUCATION = [
  {
    when: "2020 — 2023",
    title: "B.Tech, Computer Science & Engineering",
    where: "Nirma University · GJ, India",
    desc: "Computer science fundamentals with a focus on software development and systems.",
  },
  {
    when: "2017 — 2020",
    title: "Diploma in Computer Engineering",
    where: "Gujarat Technological University · GJ, India",
    desc: "Core engineering and programming foundations.",
  },
  {
    when: "2016 — 2017",
    title: "Secondary School Certificate (SSC)",
    where: "Gujarat Secondary Education Board · GJ, India",
    desc: "Science and mathematics track.",
  },
];
