import { experience } from "@/lib/data"
import Title from "./Title"

export default function Experience() {
  return (
    <div className="pt-0 sm:pt-20">
      <div className="p-5 py-10 sm:p-0">
        <Title
          text={"Experience 💼"}
          className="flex flex-col items-center justify-center"
        />
        <div className="pt-20">
          {experience.map((experience, index) => (
            <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral">{experience.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className="mb-2 font-semibold">
                  {experience.role} |{" "}
                  <span className="text-sm text-neutral">
                    {experience.company}
                  </span>
                </h6>

                {experience.description.map((description, index) => {
                  return (
                    <p key={index} className="mb-2 text-neutral">
                      {description}
                    </p>
                  )
                })}

                {experience.tech.length > 0 ? (
                  <div className="flex items-center gap-5 ">
                    {experience.tech.map((Icon, index) => {
                      return <Icon key={index} className="h-8 w-5" />
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
