import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Title from "./Title"

export default function Projects() {
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
                  <div className="space-y-2">
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
