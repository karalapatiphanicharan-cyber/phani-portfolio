"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps extends Omit<HTMLMotionProps<"div">, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  variant?: "glass" | "solid"
  hoverEffect?: boolean
}

export function Card({
  className,
  variant = "solid",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const filteredProps = props as any
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "relative overflow-hidden rounded-xl border p-6 transition-all",
        variant === "solid" && "bg-surface border-border shadow-sm",
        variant === "glass" && "bg-white/5 backdrop-blur-lg border-white/10 shadow-xl",
        hoverEffect && "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
      {...filteredProps}
    >
      {/* Gloss Effect for Glass Variant */}
      {variant === "glass" && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      )}
      <div className="relative z-10">{children as React.ReactNode}</div>
    </motion.div>
  )
}
