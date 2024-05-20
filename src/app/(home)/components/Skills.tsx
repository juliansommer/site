"use client"
import {
  SiDocker,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import Title from "./Title"
import { HoverEffect } from "@/components/ui/CardHoverEffect"

export default function Skills() {
  const skills = [
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
  return (
    <div className="mx-auto mt-10 max-w-5xl px-8">
      <Title
        text={"Skills 🛠️"}
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  )
}
