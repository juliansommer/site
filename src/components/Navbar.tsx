import cn from "@/utils/cn"
import Link from "next/link"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/juliansommer/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/juliansommer",
      label: "GitHub",
      icon: SiGithub,
    },
  ]
  return (
    <nav
      className={cn(
        "animate-move-down flex items-center justify-between py-10",
        className,
      )}>
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-purple-500 underline-offset-8">
        Julian Sommer 👨🏻‍💻
      </h1>
      <div className="item-center flex gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="h-5 w-5 transition-all hover:scale-125" />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
