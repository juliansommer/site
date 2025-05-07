"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import type { IconType } from "react-icons"

import { cn } from "@/lib/utils"

interface HoverEffectProps {
  items: {
    text: string
    Icon: IconType
  }[]
  className?: string
}

export function HoverEffect({ items, className }: HoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-2 py-10", className)}>
      {items.map((item, idx) => {
        const Icon = item.Icon
        return (
          <div
            key={idx}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-lg bg-neutral-200 dark:bg-slate-800/[0.8]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 w-full cursor-pointer overflow-hidden rounded-md bg-white p-4 ring-sky-500 transition-all duration-500 group-hover:ring-2 dark:bg-black">
              <div className="relative z-50 space-y-5 py-10">
                <Icon className="mx-auto h-8 w-8" />
                <p className="text-gray text-center text-2xl font-bold">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
