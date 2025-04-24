"use client"

import Title from "./Title"
import { HoverEffect } from "@/components/ui/CardHoverEffect"
import { skills } from "@/lib/data"

export default function Skills() {
  return (
    <div className="mx-auto max-w-3xl">
      <Title
        text={"Skills 🛠️"}
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  )
}
