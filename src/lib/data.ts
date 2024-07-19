import {
  SiDocker,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export const experience = [
  {
    year: "September 2023 - Present",
    role: "Junior Full Stack Developer",
    company: "Metatrail",
    description: [
      "●	Optimized SEO, performance (50 increase on Lighthouse), JavaScript bundle size (500kb -> 300kb) on the frontend",
      "●	Optimized page loading and requests using React by making the GraphQL queries only run-on tab change",
      "●	Created Python script to scrape and store website metadata and icons from a million domains",
      "●	Used Next.js with TypeScript to dynamically create web pages for the most popular categories and vendors",
      "●	Used GitHub Actions with Docker to containerize the website and upload the image to GitHub Packages for CI/CD",
      "●	Polished everything leading up to the site launch using Python, React.js, Go and MongoDB",
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

  {
    year: "November 2024",
    role: "Highschool Diploma",
    company: "Good Shepherd Lutheran College",
    description: [
      "● Related Coursework: Digital Solutions, Math Methods, General Math, English",
    ],
    tech: [SiPython, SiSqlite, SiHtml5],
  },
  {
    year: "January 2022 - September 2023",
    role: "Certificate 3 of Information Technology ICT30120",
    company: "TAFE Queensland",
    description: [
      "● Major: Cybersecurity",
      "●	Related Coursework: Apply introductory programming techniques, Work in a team, Develop and extend critical and creative thinking skills",
    ],
    tech: [SiPython],
  },
]

export const projects = [
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
]

export const skills = [
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
    text: "MongoDB",
    Icon: SiMongodb,
  },
  {
    text: "Docker",
    Icon: SiDocker,
  },
]

export const socials = [
  {
    link: "https://www.linkedin.com/in/juliansommer/",
    label: "LinkedIn",
    icon: SiLinkedin,
  },
  {
    link: "https://github.com/juliansommer",
    label: "GitHub",
    icon: SiGithub,
  },
]
