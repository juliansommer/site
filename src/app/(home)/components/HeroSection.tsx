import { MovingBorderBtn } from "@/components/ui/MovingBorder"
import Link from "next/link"
import Title from "./Title"

export default function HeroSection() {
  return (
    <div className="animate-move-up flex min-h-[60vh] flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-0">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">
          Nice to meet you! 👋
          <br />
          <span className="underline decoration-green-500 underline-offset-8">
            Hi, I&apos;m Julian.
          </span>
        </h1>
        <p className="text-lg text-gray-300 md:w-96">
          I&apos;m a fullstack developer from Australia with a passion for
          building modern web applications.
        </p>
        <Link href={"mailto:hi@julians.au"} className="group inline-block">
          <Title text={"Contact Me 📧"} />
        </Link>
      </div>
      <div className="relative">
        <div className="relative h-72 w-72 -rotate-[30deg] space-y-3">
          <div className="flex translate-x-8 gap-3">
            <div className="h-32 w-32 rounded-2xl bg-green-500"></div>
            <div className="h-32 w-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex -translate-x-8 gap-3">
            <div className="h-32 w-32 rounded-2xl bg-indigo-500"></div>
            <div className="h-32 w-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute right-1/2 top-[40%] -z-10"></div>
        </div>
        <div className="absolute bottom-5 left-0 sm:-left-10 sm:bottom-14">
          {/*
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for Work</p>
          </MovingBorderBtn>
          */}
        </div>
      </div>
    </div>
  )
}
