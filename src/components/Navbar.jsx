import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto flex flex-wrap items-center justify-between p-8">
        <Link href="/" className="text-5xl font-semibold text-white">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <Link
                href="#about"
                className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
