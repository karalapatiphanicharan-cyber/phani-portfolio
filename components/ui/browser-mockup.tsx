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
        "group relative flex flex-col overflow-hidden rounded-[24px] border bg-surface shadow-[0_48px_96px_-24px_rgba(0,0,0,0.6)] transition-all hover:shadow-[0_48px_96px_-24px_rgba(59,130,246,0.15)]",
        "bg-white/5 backdrop-blur-3xl border-white/15",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-6 py-5">
        <div className="flex gap-2.5">
          <div className="h-3.5 w-3.5 rounded-full bg-[#FF5F57] shadow-inner" />
          <div className="h-3.5 w-3.5 rounded-full bg-[#FFBD2E] shadow-inner" />
          <div className="h-3.5 w-3.5 rounded-full bg-[#28C840] shadow-inner" />
        </div>

        {/* Address Bar */}
        <div className="flex h-8 w-full max-w-xl items-center justify-center rounded-xl bg-black/20 border border-white/5 px-6 text-[12px] text-muted-foreground/60 font-medium tracking-wide">
          <span className="opacity-40 mr-1">https://</span>{url}
        </div>

        <div className="flex items-center">
          <span className="text-[12px] font-heading font-bold tracking-tighter text-white/40 select-none uppercase">
            KSP<span className="text-primary/60">C</span>
          </span>
        </div>
      </div>

      {/* Content Slot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#030712]/60">
        {children || (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-muted-foreground/5 font-code tracking-[0.5em] text-xs uppercase">Preview Layer</span>
          </div>
        )}
      </div>
    </div>
  )
}
