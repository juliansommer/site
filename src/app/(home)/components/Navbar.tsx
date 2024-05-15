import Link from "next/link"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Navbar() {
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
    <nav className="flex items-center justify-between py-10">
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-green-500 underline-offset-8">
        Julian Sommer 👨🏻‍💻
      </h1>
      <div>
        {socials.map((social, index) => {
          const Icon = social.icon
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
