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
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-surface shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] transition-all hover:shadow-[0_32px_64px_-15px_rgba(59,130,246,0.1)]",
        "bg-white/5 backdrop-blur-2xl border-white/10",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/50 hover:bg-red-500/80 transition-colors" />
          <div className="h-3 w-3 rounded-full bg-amber-500/50 hover:bg-amber-500/80 transition-colors" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/50 hover:bg-emerald-500/80 transition-colors" />
        </div>

        {/* Address Bar */}
        <div className="flex h-7 w-full max-w-lg items-center justify-center rounded-lg bg-white/5 px-4 text-[11px] text-muted-foreground/50 font-medium tracking-wide">
          <span className="opacity-50">https://</span>{url}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-heading font-bold tracking-tighter text-muted-foreground/30 select-none">
            KS<span className="text-primary/30">P</span>C
          </span>
        </div>
      </div>

      {/* Content Slot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#030712]/50">
        {children || (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-muted-foreground/10 font-code tracking-widest text-xs uppercase">Preview Area</span>
          </div>
        )}
      </div>
    </div>
  )
}
