import type { Metadata } from "next"

import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { education, experience } from "@/lib/data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:32px_32px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.7)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.7)_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="mx-auto max-w-6xl p-5 pb-36">
        <Navbar className="animate-move-down" />
        <HeroSection />
      </div>
      <div className="mx-auto max-w-5xl space-y-24 p-5">
        <Experience title={"Experience 💼"} data={experience} />
        <Experience title={"Education 📚"} data={education} />
        <Projects />
        <Skills />
      </div>
      <div className="mx-auto max-w-6xl p-5">
        <Footer />
      </div>
    </div>
  )
}
