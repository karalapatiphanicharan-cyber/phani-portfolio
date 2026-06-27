"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { MaxWidthWrapper } from "@/components/layout/layout"
import { Button } from "@/components/buttons/button"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tighter hover:opacity-80 transition-opacity">
          KSP<span className="text-primary">C</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Projects</span>
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">About</span>
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Contact</span>
          </div>
          <Button variant="primary" size="sm" className="rounded-full px-6">
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
               <span className="text-lg font-medium">Projects</span>
               <span className="text-lg font-medium">About</span>
               <span className="text-lg font-medium">Contact</span>
               <Button className="w-full rounded-full">Resume</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
