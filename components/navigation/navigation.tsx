"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { MaxWidthWrapper } from "@/components/layout/layout"
import { Button } from "@/components/buttons/button"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["home", "about", "skills", "projects", "experience", "contact"]
    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    if (elem) {
      const offset = 80 // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = elem.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3" : "bg-transparent py-5"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-heading font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          KSP<span className="text-primary">C</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-foreground py-1",
                  activeSection === item.href.replace("#", "") ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
          <Button variant="primary" size="sm" className="rounded-full px-6" asChild>
            <a
              href="/resume/PhaniCharanResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </a>
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
               {navItems.map((item) => (
                 <a
                   key={item.label}
                   href={item.href}
                   onClick={(e) => scrollToSection(e, item.href)}
                   className={cn(
                     "text-lg font-medium transition-colors",
                     activeSection === item.href.replace("#", "") ? "text-primary" : "text-foreground"
                   )}
                 >
                   {item.label}
                 </a>
               ))}
               <Button className="w-full rounded-full" asChild>
                 <a
                   href="/resume/PhaniCharanResume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   download
                 >
                   Resume
                 </a>
               </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
