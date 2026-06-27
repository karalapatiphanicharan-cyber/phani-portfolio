import * as React from "react"
import { MaxWidthWrapper } from "@/components/layout/layout"
import { Divider } from "@/components/ui/divider"

export function Footer() {
  return (
    <footer className="bg-background py-12">
      <MaxWidthWrapper>
        <Divider className="mb-12" gradient />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-heading font-bold tracking-tighter">
              KSP<span className="text-primary">C</span>
            </span>
            <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">
              Building premium digital experiences with focus on engineering excellence and design precision.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Home</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">Social</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">GitHub</li>
              <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
          <p>DESIGNED & BUILT WITH PRECISION</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
