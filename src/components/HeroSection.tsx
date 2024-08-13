import { email } from "@/lib/data"
import Link from "next/link"
import Title from "./Title"

export default function HeroSection() {
  return (
    <div className="flex min-h-[60vh] animate-move-up flex-col-reverse items-center justify-between gap-14">
      <div className="flex flex-col items-center space-y-10 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Nice to meet you! 👋
          <br />
          <span className="underline decoration-sky-500 underline-offset-8">
            Hi, I&apos;m Julian.
          </span>
        </h1>
        <p className="w-96 text-lg md:text-xl">
          I&apos;m a fullstack developer from Australia with a passion for
          building modern web applications.
        </p>
        <Link href={`mailto:${email}`} className="group inline-block">
          <Title text={"Contact 📧"} />
        </Link>
      </div>
    </div>

    // this is the old code where it had the text on the left and then an image on the right
    // am keeping it because I will probably add an image back
    // <div className="flex min-h-[60vh] animate-move-up flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-0">
    //   <div className="space-y-10 text-center lg:text-left">
    //     <h1 className="text-4xl font-bold lg:text-6xl">
    //       Nice to meet you! 👋
    //       <br />
    //       <span className="underline decoration-sky-500 underline-offset-8">
    //         Hi, I&apos;m Julian.
    //       </span>
    //     </h1>
    //     <p className="text-lg md:w-96">
    //       I&apos;m a fullstack developer from Australia with a passion for
    //       building modern web applications.
    //     </p>
    //     <Link href={`mailto:${email}`} className="group inline-block">
    //       <Title text={"Contact 📧"} />
    //     </Link>
    //   </div>

    //   {/* The Shapes on the Right */}
    //   <div className="relative">
    //     <div className="relative h-72 w-72 -rotate-[30deg] space-y-3">
    //       <div className="flex translate-x-8 gap-3">
    //         <div className="h-32 w-32 rounded-2xl bg-sky-500"></div>
    //         <div className="h-32 w-32 rounded-full bg-purple-500"></div>
    //       </div>
    //       <div className="flex -translate-x-8 gap-3">
    //         <div className="h-32 w-32 rounded-2xl bg-purple-500"></div>
    //         <div className="h-32 w-32 rounded-full bg-sky-500"></div>
    //       </div>
    //       <div className="glow absolute right-1/2 top-[40%] -z-10 h-0 w-0 rounded-full"></div>
    //     </div>
    //   </div>
    // </div>
  )
}
