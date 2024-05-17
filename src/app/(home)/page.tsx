import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl p-5">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}
