import type { Metadata } from "next"

import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { education, experience } from "@/lib/data"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-black">
      <div className="bg-grid-black/[0.07] dark:bg-grid-white/[0.07] relative pb-36">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="mx-auto max-w-6xl p-5">
          <Navbar className="animate-move-down" />
          <HeroSection />
        </div>
        <div className="absolute -bottom-5 left-0 h-10 bg-gradient-to-t from-white xl:h-32 dark:from-black"></div>
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
