import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
}

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-2 bg-white p-5 text-center dark:bg-black">
      <h2 className="text-2xl">404 - Not Found</h2>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link type="button" href="/" className="text-cyan-500">
        Return Home
      </Link>
    </div>
  )
}
