"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BrowserMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
}

export function BrowserMockup({
  url = "portfolio.dev",
  className,
  children,
  ...props
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-surface shadow-2xl transition-all hover:shadow-primary/5",
        "bg-white/5 backdrop-blur-xl border-white/10",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Address Bar */}
        <div className="flex h-6 w-full max-w-md items-center justify-center rounded-md bg-white/5 px-3 text-[10px] text-muted-foreground">
          {url}
        </div>

        <div className="flex gap-1.5 opacity-0">
          <div className="h-3 w-3" />
          <div className="h-3 w-3" />
          <div className="h-3 w-3" />
        </div>
      </div>

      {/* Content Slot */}
      <div className="relative aspect-video w-full overflow-hidden bg-background/50">
        {children || (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-muted-foreground/20 font-code">Project Preview</span>
          </div>
        )}
      </div>
    </div>
  )
}
