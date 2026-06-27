import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  gradient?: boolean
}

export function Divider({
  className,
  orientation = "horizontal",
  gradient = false,
  ...props
}: DividerProps) {
  return (
    <div
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        gradient && (orientation === "horizontal"
          ? "bg-gradient-to-r from-transparent via-border to-transparent"
          : "bg-gradient-to-b from-transparent via-border to-transparent"),
        className
      )}
      {...props}
    />
  )
}
