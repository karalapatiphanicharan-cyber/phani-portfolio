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
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/ui/icons"

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
                        <p className="text-xl font-heading font-bold text-foreground">K. Sri Phani Charan</p>
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
                      <a
                        href="/resume/PhaniCharanResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <FileText className="w-4 h-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group"
                    >
                      <Card
                        variant="glass"
                        className="p-5 h-full transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
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
                    </motion.a>
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
