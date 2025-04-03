import type { Email, Experience, Project, Skill, Social } from "@/types"
import {
  SiDocker,
  SiFlask,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export const experience: Experience[] = [
  {
    year: "September 2023 - December 2024",
    role: "Junior Full Stack Developer",
    company: "Metatrail",
    description: [
      "●	Optimized SEO, performance (50 increase on Lighthouse), JavaScript bundle size (500kb to 300kb) on the frontend",
      "●	Created a Go program to parse the DOM of websites against technologies matches using JavaScript",
      "●	Created Python script to scrape and store website metadata and icons from a million domains",
      "●	Used Next.js with TypeScript to dynamically create web pages for the most popular categories and vendors",
      "●	Used GitHub Actions with Docker to containerize the website and upload the image to GitHub Packages for CI/CD",
    ],
    tech: [
      SiPython,
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiGo,
      SiMongodb,
      SiTailwindcss,
      SiDocker,
    ],
  },
]

export const education: Experience[] = [
  {
    year: "Expected Graduation 2027",
    role: "Bachelor of Computing Science",
    company: "University of Technology Sydney",
    description: [],
    tech: [],
  },
  {
    year: "2020 - 2024",
    role: "Highschool Diploma",
    company: "Good Shepherd Lutheran College",
    description: [
      "● Related Coursework: Digital Solutions, Math Methods, General Math, English",
    ],
    tech: [SiPython, SiSqlite, SiFlask, SiHtml5],
  },
  {
    year: "2022 - 2023",
    role: "Certificate 3 of Information Technology ICT30120",
    company: "TAFE Queensland",
    description: [
      "● Major: Cybersecurity",
      "●	Related Coursework: Apply introductory programming techniques, Work in a team, Develop and extend critical and creative thinking skills",
    ],
    tech: [SiPython],
  },
]

export const projects: Project[] = [
  {
    title: "Workout Track",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiSupabase],
    link: "https://github.com/juliansommer/workout-track",
    cover: "/workout-track.png",
    background: "bg-sky-500",
  },
  {
    title: "Prompts",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiMongodb],
    link: "https://github.com/juliansommer/prompts",
    cover: "/prompts.png",
    background: "bg-sky-500",
  },
  {
    title: "AI Project",
    tech: [SiPython, SiLangchain, SiOpenai],
    link: "https://github.com/juliansommer/ai-project",
    cover: "/ai-project.png",
    background: "bg-purple-500",
  },
  {
    title: "Random Scripts",
    tech: [SiPython],
    link: "https://github.com/juliansommer/random-scripts",
    cover: "/random-scripts.png",
    background: "bg-purple-500",
  },
]

export const skills: Skill[] = [
  {
    text: "Python",
    Icon: SiPython,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    text: "JavaScript",
    Icon: SiJavascript,
  },
  {
    text: "TypeScript",
    Icon: SiTypescript,
  },
  {
    text: "Go",
    Icon: SiGo,
  },
  {
    text: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    text: "Docker",
    Icon: SiDocker,
  },
]

export const socials: Social[] = [
  {
    link: "https://github.com/juliansommer",
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    link: "https://www.linkedin.com/in/juliansommer",
    label: "LinkedIn",
    Icon: SiLinkedin,
  },
]

export const email: Email = "hi@julians.au"
