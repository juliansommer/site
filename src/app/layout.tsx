import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  authors: {
    name: "Julian Sommer",
    url: "https://github.com/juliansommer",
  },
  creator: "Julian Sommer",
  description: "Julian Sommer Site",
  keywords: ["Julian Sommer", "Julian Sommer Site"],
  robots: {
    index: true,
    follow: true,
  },
  title: "Julian Sommer Site",
  openGraph: {
    title: "Julian Sommer",
    description: "Julian Sommer Site",
    url: "https://julians.au",
    siteName: "Julian Sommer",
    locale: "en_AU",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </head>
    </html>
  )
}
