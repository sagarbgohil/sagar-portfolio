import {
  FaAws,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";
import {
  SiApachekafka,
  SiExpress,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
  SiSwagger,
  SiMedium,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";

export const siteData = {
  resumeLink:
    "https://drive.google.com/file/d/1tm7guZRwzu5j4vlUn0H4kwnSYXhnAbXW/view?usp=drive_links",
  buyMeCoffeeLink: "https://www.buymeacoffee.com/sagargohil",
  baseUrl: "https://www.sagargohil.dev",
};

export const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export const projects = [
  {
    index: "01",
    title: "Urbanhelps",
    description:
      "An online consultation platform with backend for bookings, live chat, and sessions. Integrated Cashfree for payments and built customer-provider matching algorithm.",
    link: "https://urbanhelps.in",
  },
  {
    index: "02",
    title: "Susuda - Football Club Management",
    description:
      "Developed coupon generation logic and improved rarity management. Optimized PostgreSQL queries for scalability using Prisma and Docker.",
    link: "",
  },
  {
    index: "03",
    title: "Stile - Social Media App",
    description:
      "Implemented features like posts, comments, media uploads, and live messaging using WebSocket to boost user engagement.",
    link: "https://stile-country.com",
  },
  {
    index: "04",
    title: "Vebuin - Disaster Management Web App",
    description:
      "Integrated SaaS APIs and CRM for real-time disaster alerts and tracking. Utilized AWS Lambda, ECR, S3, and API Gateway.",
    link: "",
  },
  {
    index: "05",
    title: "Bellboy - Live Order Delivery",
    description:
      "Built real-time chat and location sharing features using WebSocket. Integrated Kafka and improved order tracking performance.",
    link: "",
  },
  {
    index: "06",
    title: "Chowis - Healthcare CRM",
    description:
      "Created a scalable CRM for managing doctors, patients, and diseases using NestJS, TypeORM, PostgreSQL, and Swagger.",
    link: "",
  },
  {
    index: "07",
    title: "Agriguru - Import-Export Product Management",
    description:
      "Managed product listings, taxes, contracts, inquiries, and real-time performance analytics. Used NestJS, MongoDB, and Swagger.",
    link: "",
  },
  {
    index: "08",
    title: "Thingslinker - IoT Data Management",
    description:
      "Processed and visualized large IoT datasets. Implemented real-time analytics with Redis and PostgreSQL using NestJS and Docker.",
    link: "",
  },
  {
    index: "09",
    title: "E-Healthcard",
    description:
      "Developed Android application for managing patient health records. Built APIs for syncing data between frontend and backend.",
    link: "",
  },
  {
    index: "10",
    title: "Dughdham - Smart India Hackathon Project",
    description:
      "Contributed to a dairy delivery platform. Integrated Google Pay for secure payments using Node.js.",
    link: "",
  },
];

export const about = {
  title: "About Me",
  description:
    "I am a passionate software engineer with a strong foundation in web development and a keen interest in building innovative solutions. I have experience in various technologies and frameworks, and I am always eager to learn and adapt to new challenges.",
  items: [
    {
      name: "Name",
      value: "Sagar Gohil",
    },
    {
      name: "Email",
      value: "gohilbsagar@gmail.com",
    },
    {
      name: "Location",
      value: "Gujarat, India",
    },
    {
      name: "Experience",
      value: "2+ years",
    },
    {
      name: "Languages",
      value: "English, Hindi, Gujarati",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects, ranging from web applications to real-time systems. My experience includes backend development, database management, and cloud integration.",
  items: [
    {
      title: "Software Engineer - Full Stack",
      bottom: "Freelancer, GJ, India",
      top: "01/2025 - present",
      description:
        "Developed and maintained web applications, focusing on backend development and database management.",
    },
    {
      title: "Software Engineer - Backend",
      bottom: "Notion Infosoft, GJ, India",
      top: "03/2024 - 12/2024",
      description:
        "Developed and maintained web applications, focusing on backend development and database management.",
    },
    {
      title: "Backend Developer",
      bottom: "Freelancer, GJ, India",
      top: "07/2023 - 02/2024",
      description:
        "Assisted in the development of web applications and gained hands-on experience in various technologies.",
    },
    {
      title: "Backend Developer Intern",
      bottom: "Toddle - Your Teaching Partner, KA, India",
      top: "01/2023 - 06/2023",
      description:
        "Gained practical experience in software development and contributed to various projects.",
    },
    {
      title: "Backend Developer Intern",
      bottom: "Encore Research, GJ, India",
      top: "05/2022 - 07/2022",
      description:
        "Gained practical experience in software development and contributed to various projects.",
    },
  ],
};

export const education = {
  icon: "/assets/resume/education.svg",
  title: "My Education",
  description:
    "I hold a Bachelor's degree in Computer Science and Engineering from Nirma University, where I gained a solid foundation in software development and engineering principles.",
  items: [
    {
      top: "2020 - 2023",
      title: "B.Tech in Computer Science & Engineering",
      bottom: "Nirma University, GJ, India",
      description:
        "Studied various subjects related to computer science and engineering, with a focus on software development.",
    },
    {
      top: "2017 - 2020",
      title: "Diploma in Computer Engineering",
      bottom: "Gujarat Technological University, GJ, India",
      description:
        "Studied various subjects related to computer science and engineering, with a focus on software development.",
    },
    {
      top: "2016 - 2017",
      title: " Secondary School Certificate (SSC)",
      bottom: "Gujarat Secondary  Education Board, GJ, India",
      description:
        "Completed secondary education with a focus on science and mathematics.",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "I have a diverse skill set that includes frontend and backend development, database management, and cloud integration. I am proficient in various programming languages and frameworks.",
  items: [
    {
      name: "Node.js",
      icon: <DiNodejs />,
    },
    {
      name: "NestJS",
      icon: <SiNestjs />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "AWS",
      icon: <FaAws />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
    },
    {
      name: "Redis",
      icon: <SiRedis />,
    },
    {
      name: "Kafka",
      icon: <SiApachekafka />,
    },
    {
      name: "Swagger",
      icon: <SiSwagger />,
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio />,
    },
    {
      name: "React.js",
      icon: <GrReactjs />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
    },
    {
      name: "TypeORM",
      icon: <SiTypeorm />,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
    {
      name: "RESTful APIs",
      icon: <TbApi />,
    },
  ],
};

export const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologies used",
  },
  {
    num: 8,
    text: "Clients worked with",
  },
];

export const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/sagarbgohil",
    label: "Github",
  },
  {
    icon: <FaGitlab />,
    link: "https://gitlab.com/sagarbgohil",
    label: "Gitlab",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/gohilsagar",
    label: "LinkedIn",
  },
  { icon: <FaXTwitter />, link: "https://x.com/SagarbGohil", label: "X" },
  {
    icon: <SiMedium />,
    link: "https://medium.com/@gohilbsagar",
    label: "Medium",
  },
  {
    icon: <FaHashnode />,
    link: "https://sagargohil.hashnode.dev",
    label: "Hashnode",
  },
  { icon: <FaDev />, link: "https://dev.to/sagargohil", label: "Dev" },
];
