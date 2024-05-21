import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="relative bg-white bg-grid-black/[0.03] dark:bg-black dark:bg-grid-white/[0.03]">
        <div className="mx-auto max-w-7xl p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="absolute -bottom-5 left-0 h-10 bg-gradient-to-t from-black xl:h-32"></div>
      </div>
      <div className="mt-15 mx-auto max-w-7xl p-5">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
