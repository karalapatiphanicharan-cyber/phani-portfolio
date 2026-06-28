"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  User,
  Briefcase,
  Send
} from "lucide-react"
import { Section, MaxWidthWrapper } from "@/components/layout/layout"
import { Card } from "@/components/cards/card"
import { Button } from "@/components/buttons/button"
import { fadeUp, staggerContainer } from "@/lib/animations"

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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "karalapatiphanicharan@gmail.com",
    href: "mailto:karalapatiphanicharan@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "karalapatiphanicharan-cyber",
    href: "https://github.com/karalapatiphanicharan-cyber",
    color: "text-slate-300"
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "phani-charan-7335283a5",
    href: "https://www.linkedin.com/in/phani-charan-7335283a5/",
    color: "text-blue-600"
  },
  {
    icon: LeetCodeIcon,
    label: "LeetCode",
    value: "GV2023000500",
    href: "https://leetcode.com/u/GV2023000500/",
    color: "text-yellow-500"
  }
]

export function Contact() {
  return (
    <Section id="contact" className="py-20 md:py-32">
      <MaxWidthWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Heading */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <h2 className="section-title">Let&apos;s Build Something Great Together</h2>
            <p className="subtitle mx-auto max-w-2xl">
              I&apos;m always interested in discussing software engineering, full-stack development, AI, and exciting new opportunities. Whether it&apos;s a collaboration, internship, or full-time role, I&apos;d love to connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Contact Info */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div className="space-y-6">
                <Card variant="glass" className="p-8 border-primary/10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold">K. Sri Phani Charan</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Briefcase className="w-4 h-4" />
                          Software Developer • Full-Stack Developer • AI Enthusiast
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span className="text-sm">Visakhapatnam, Andhra Pradesh, India</span>
                    </div>

                    <Button variant="primary" className="w-full sm:w-auto gap-2 rounded-full px-8" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card
                        variant="glass"
                        className="p-5 h-full transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-primary/5"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors ${info.color}`}>
                            <info.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{info.label}</p>
                            <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{info.value}</p>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div variants={fadeUp}>
              <Card variant="glass" className="p-8 md:p-10 border-primary/10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground ml-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30 resize-none"
                    />
                  </div>
                  <Button variant="primary" className="w-full gap-2 rounded-xl py-6 text-base font-semibold group">
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </Section>
  )
}
