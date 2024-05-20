import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import Title from "./Title"
import Link from "next/link"
import cn from "@/utils/cn"
import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover"

export default function Projects() {
  const projects = [
    {
      title: "Prompts",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiMongodb],
      link: "https://github.com/juliansommer/prompts",
      cover: "/prompts.png",
      background: "bg-sky-500",
    },
    {
      title: "Site",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
      link: "https://github.com/juliansommer/site",
      cover: "/site.png",
      background: "bg-purple-500",
    },
  ]
  return (
    <div className="p-5 py-10 sm:p-0">
      <Title
        text={"Projects 🎨"}
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 gap-5 pt-20 sm:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("rounded-md p-3", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="h-52 w-full cursor-pointer space-y-5 md:h-80">
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5 ">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="h-8 w-5" />
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
