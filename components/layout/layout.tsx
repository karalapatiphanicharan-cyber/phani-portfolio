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
    <div className={cn("mx-auto w-full max-w-screen-xl px-4 md:px-20", className)}>
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
  gap?: number
}) {
  const colMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid", colMap[cols], `gap-${gap}`, className)}>
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
    <div className={cn("flex flex-col gap-20 md:gap-32", className)}>
      {children}
    </div>
  )
}
