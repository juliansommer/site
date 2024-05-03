import Link from "next/link"
import NavLink from "./NavLink"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto flex flex-wrap items-center justify-between p-8">
        <Link href="/" className="text-lg font-semibold text-white md:text-5xl">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
