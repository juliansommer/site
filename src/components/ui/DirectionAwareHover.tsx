"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface DirectionAwareHoverProps {
  imageUrl: string
  imageAlt: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  className?: string
}

export function DirectionAwareHover({
  imageUrl,
  imageAlt,
  children,
  childrenClassName,
  imageClassName,
  className,
}: DirectionAwareHoverProps) {
  const ref = useRef<HTMLDivElement>(null)

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right"
  >("left")

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!ref.current) return

    const direction = getDirection(event, ref.current)
    switch (direction) {
      case 0:
        setDirection("top")
        break
      case 1:
        setDirection("right")
        break
      case 2:
        setDirection("bottom")
        break
      case 3:
        setDirection("left")
        break
      default:
        setDirection("left")
        break
    }
  }

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement,
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1)
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1)
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "group/card relative overflow-hidden rounded-lg bg-transparent",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-500 group-hover/card:block" />
          <motion.div
            variants={variants}
            className="relative h-full w-full"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt={imageAlt + " Image"}
              className={cn("scale-[1.15] object-cover", imageClassName)}
              width="1000"
              height="1000"
              src={imageUrl}
              priority
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "absolute bottom-4 left-4 z-40 text-white",
              childrenClassName,
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
}

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    opacity: 1,
  },
  bottom: {
    opacity: 1,
  },
  left: {
    opacity: 1,
  },
  right: {
    opacity: 1,
  },
}
