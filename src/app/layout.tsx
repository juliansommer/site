import ThemeButton from "@/components/ThemeButton"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata, Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

// order of this doesn't matter as next puts the important stuff (viewport, theme colour, title description) first
// then puts the others alphabetised
export const metadata: Metadata = {
  metadataBase: new URL("https://julians.au"),
  title: {
    template: "%s | Julian Sommer",
    default: "Julian Sommer",
  },
  description:
    "Julian Sommer Portfolio Website which uses Next.js, React, TypeScript and Tailwind CSS",
  applicationName: "Julian Sommer Site",
  keywords: ["Julian", "Sommer", "Australia"],
  creator: "Julian Sommer",

  // not defining title and description in og as next will use the metadata.title and metadata.description
  // so can update these on page and it will also update the open graph and twitter cards
  // twitter is not defined as next does it automatically with the title and description so can keep all 3 consistent easily
  openGraph: {
    siteName: "Julian Sommer",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <head>
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange>
            {children}
            <ThemeButton />
          </ThemeProvider>
        </body>
      </head>
    </html>
  )
}
