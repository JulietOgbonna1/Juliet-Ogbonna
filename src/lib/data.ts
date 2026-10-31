export const site = {
  name: "Juliet Ogbonna",
  role: "Frontend Developer & Designer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://juliet-ogbonna.vercel.app",
  email: "julietng2020@gmail.com",
  phones: ["08108202888", "09015819521"],
  location: "Enugu, Nigeria",
  description:
    "Juliet Ogbonna is a frontend developer and designer in Enugu, Nigeria, building fast, responsive, beautifully crafted web experiences with React, Next.js, Tailwind CSS and Node.js.",
  socials: {
    github: "https://github.com/JulietOgbonna",
    linkedin:
      "https://www.linkedin.com/in/juliet-ogbonna-3921a1332",
    facebook: "https://www.facebook.com/share/16wZ45wGVi/",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const roles = [
  "Frontend Developer",
  "UI Engineer",
  "Next.js Builder",
  "Pixel-Perfect Designer",
];

export const about = {
  headline: "Turning ideas into fast, elegant, human-centred interfaces.",
  paragraphs: [
    "Hey there! I'm Juliet Ogbonna, a frontend developer with a strong foundation in HTML, CSS and JavaScript who loves bringing websites to life with clean code and creative flair.",
    "I'm passionate about building responsive, user-friendly and eye-catching interfaces, and I keep sharpening my craft to stay aligned with modern web standards — from React and Next.js on the front to Node.js, Express and MongoDB behind it.",
    "I'm all about learning, building cool stuff, and having fun while at it.",
  ],
};

export type Skill = {
  name: string;
  icon: string; // key into icons map
  blurb: string;
  group: "Core" | "Frameworks" | "Backend" | "Tooling";
};

export const skills: Skill[] = [
  { name: "HTML5", icon: "html5", group: "Core", blurb: "Clean, semantic, accessible structure" },
  { name: "CSS3", icon: "css", group: "Core", blurb: "Layout, motion and responsive styling" },
  { name: "JavaScript", icon: "javascript", group: "Core", blurb: "Modern ES6+ interactivity and logic" },
  { name: "React.js", icon: "react", group: "Frameworks", blurb: "Composable, stateful user interfaces" },
  { name: "Next.js", icon: "nextdotjs", group: "Frameworks", blurb: "Server rendering, routing and SEO" },
  { name: "Tailwind CSS", icon: "tailwindcss", group: "Frameworks", blurb: "Design systems at the speed of thought" },
  { name: "Node.js", icon: "nodedotjs", group: "Backend", blurb: "JavaScript on the server" },
  { name: "Express.js", icon: "express", group: "Backend", blurb: "Lean REST APIs and middleware" },
  { name: "MongoDB", icon: "mongodb", group: "Backend", blurb: "Flexible document data modelling" },
  { name: "Vercel", icon: "vercel", group: "Tooling", blurb: "Edge deployments and previews" },
  { name: "Git & GitHub", icon: "github", group: "Tooling", blurb: "Version control and collaboration" },
];

export const softSkills = [
  "Strong communication",
  "Attention to detail",
  "Problem-solving mindset",
  "Eagerness to learn and grow",
  "Team collaboration",
  "Figma-to-code fluency",
];

export const services = [
  {
    title: "Website Development",
    body: "Fully responsive websites and landing pages that feel smooth and consistent on every device — built for both style and performance.",
  },
  {
    title: "UI/UX Implementation",
    body: "Figma, Adobe XD or Sketch designs translated into pixel-perfect, responsive, production-ready code.",
  },
  {
    title: "Website Maintenance",
    body: "Ongoing support to update, fix and improve existing websites so everything runs smoothly and stays current.",
  },
  {
    title: "SEO & Performance",
    body: "Faster load times, strong Core Web Vitals and search-friendly markup that lift both user experience and rankings.",
  },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  url: string;
  summary: string;
  stack: string[];
  collaboration?: string;
};

export const projects: Project[] = [
  {
    slug: "mater-christi",
    title: "Mater Christi Centre",
    kind: "Team Collaboration · Verbum Networks",
    url: "https://materchristicentre.com/",
    summary:
      "A production website delivered as part of the Verbum Networks development team — collaborating on layout, responsive UI components and page structure, and sharing that knowledge with the students trained alongside the project.",
    stack: ["Responsive UI", "Team workflow", "Git & GitHub"],
    collaboration: "Built with the Verbum Networks team",
  },
  {
    slug: "nova-hairs",
    title: "Nova Hairs",
    kind: "Brand & Commerce Experience",
    url: "https://nova-hairs.vercel.app/",
    summary:
      "A polished, mobile-first brand site for a hair business — product storytelling, crisp visuals and a frictionless browsing flow, deployed on Vercel.",
    stack: ["React", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "dev-portfolio",
    title: "Developer Portfolio",
    kind: "Personal Product",
    url: "https://dev-portfolio-quyw-gb51m2ndc-juliet-ogbonnas-projects.vercel.app/",
    summary:
      "An earlier personal portfolio exploring bold layout, motion and personal branding — a playground for interface ideas that shaped this site.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

export const experience = [
  {
    role: "Frontend Development Intern",
    org: "Verbum Networks, Enugu",
    period: "Aug 2024 — Aug 2025",
    summary:
      "A one-year internship shipping real-world projects inside a team of developers.",
    points: [
      "Built and styled responsive web pages with HTML, CSS and JavaScript.",
      "Recreated landing pages and UI components from provided designs.",
      "Applied semantic HTML and modern CSS best practices.",
      "Troubleshot layout issues and improved page structure.",
      "Contributed to code reviews and team discussions to refine and optimise code.",
      "Collaborated on the Mater Christi Centre website and shared knowledge with trainee students.",
    ],
  },
];

export const education = [
  {
    title: "Web Development Training",
    org: "Verbum Networks Limited, Enugu",
    period: "Aug 2023 — Aug 2024",
    body: "A comprehensive one-year frontend programme — HTML, CSS, JavaScript, responsive design and UI implementation, all hands-on.",
  },
  {
    title: "B.Sc. Human Anatomy",
    org: "University of Nigeria, Enugu Campus",
    period: "2020 — 2025",
    body: "Core medical and anatomical sciences — a foundation in analytical thinking and detail orientation that powers my work in tech.",
  },
];
