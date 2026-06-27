import * as React from "react"
import { cn } from "@/lib/utils"

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-6 md:px-12 lg:px-20", className)}>
      {children}
    </div>
  )
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 overflow-hidden", className)}
    >
      {children}
    </section>
  )
}

export function Grid({
  className,
  children,
  cols = 1,
  gap = 8,
}: {
  className?: string
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32
}) {
  const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const gapMap = {
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
    16: "gap-16",
    20: "gap-20",
    24: "gap-24",
    32: "gap-32",
  }

  return (
    <div className={cn("grid", colMap[cols], gapMap[gap], className)}>
      {children}
    </div>
  )
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-24 md:gap-32 lg:gap-40", className)}>
      {children}
    </div>
  )
}
