import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter as FontSans } from "next/font/google"

import ThemeButton from "@/components/ThemeButton"

import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://julians.au"),
  title: {
    template: "%s | Julian Sommer",
    default: "Julian Sommer",
  },
  description:
    "Julian Sommer Portfolio Website which uses Next.js, React, TypeScript and Tailwind CSS. Julian Sommer is a full stack developer based in Australia.",
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
  openGraph: {
    siteName: "Julian Sommer",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    site: "https://julians.au",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <ThemeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
