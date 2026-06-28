"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Heart } from "lucide-react"
import { MaxWidthWrapper } from "@/components/layout/layout"
import { Divider } from "@/components/ui/divider"

// Custom SVG components for brand icons
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.88 9.88a1.374 1.374 0 0 0 0 1.94l6.058 6.057a1.374 1.374 0 0 0 1.94 0l5.692-5.692a1.374 1.374 0 0 0 0-1.94l-6.058-6.058a1.374 1.374 0 0 0-1.94 0l-5.692 5.692a1.374 1.374 0 0 1-1.94 0l9.88-9.88A1.374 1.374 0 0 0 13.483 0z" />
    <path d="m20.947 14.407-3.996 3.996a1.374 1.374 0 0 0 0 1.94l6.058 6.058a1.374 1.374 0 0 0 1.94 0l3.996-3.996a1.374 1.374 0 0 0 0-1.94l-6.058-6.058a1.374 1.374 0 0 0-1.94 0z" />
  </svg>
)

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    icon: GitHubIcon,
    href: "https://github.com/karalapatiphanicharan-cyber",
    label: "GitHub"
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/phani-charan-7335283a5/",
    label: "LinkedIn"
  },
  {
    icon: LeetCodeIcon,
    href: "https://leetcode.com/u/GV2023000500/",
    label: "LeetCode"
  },
  {
    icon: Mail,
    href: "mailto:karalapatiphanicharan@gmail.com",
    label: "Email"
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
  }

  return (
    <footer id="footer" className="bg-background py-12 md:py-20 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <MaxWidthWrapper>
        <Divider className="mb-12 md:mb-20" gradient />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-5 lg:col-span-6 space-y-6">
            <Link
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="text-2xl font-heading font-bold tracking-tighter inline-block hover:opacity-80 transition-opacity"
            >
              KSP<span className="text-primary">C</span>
            </Link>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Software Developer</p>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                Building premium digital experiences with modern technologies, clean architecture, and thoughtful user experiences.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-heading font-bold mb-6 text-sm uppercase tracking-[0.2em] text-foreground/50">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-heading font-bold mb-6 text-sm uppercase tracking-[0.2em] text-foreground/50">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-fit"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground uppercase tracking-[0.2em]">
          <p>© {currentYear} K. Sri Phani Charan. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2 text-center md:text-right">
            Designed & Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js, React, TypeScript and Tailwind CSS.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
