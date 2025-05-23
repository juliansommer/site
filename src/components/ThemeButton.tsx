"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsMoon, BsSun } from "react-icons/bs"

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // need to check if mounted as otherwise there is hydration error
  if (!mounted) {
    return null
  }

  return (
    mounted && (
      <button
        type="button"
        className="border-opacity-40 bg-opacity-80 fixed right-5 bottom-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black bg-white shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-white dark:bg-gray-950"
        aria-label={theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
      >
        {theme === "light" ? <BsMoon /> : <BsSun />}
      </button>
    )
  )
}
