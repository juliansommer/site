import {
  SiDocker,
  SiGithub,
  SiGo,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"

export const projects = [
  {
    title: "Prompts",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiMongodb],
    link: "https://github.com/juliansommer/prompts",
    cover: "/prompts.png",
    background: "bg-sky-500",
  }
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