"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight, Download, Code } from "lucide-react"
import { Button } from "@/components/buttons/button"
import { Badge } from "@/components/ui/badge"
import { Section, MaxWidthWrapper, Container } from "@/components/layout/layout"
import { fadeUp, blurReveal, staggerContainer } from "@/lib/animations"

// Custom SVG components for brand icons since they might be missing in this lucide version or for better precision
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

const socialLinks = [
  {
    name: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/karalapatiphanicharan-cyber",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/phani-charan-7335283a5/",
  },
  {
    name: "LeetCode",
    icon: LeetCodeIcon,
    href: "https://leetcode.com/u/GV2023000500/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:karalapatiphanicharan@gmail.com",
  },
]

export function Hero() {
  return (
    <Section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <MaxWidthWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-6 md:space-y-8"
            >
              <motion.div variants={fadeUp}>
                <Badge variant="glass" className="px-4 py-1 border-primary/20 text-primary">
                  Available for opportunities
                </Badge>
              </motion.div>

              <div className="space-y-4">
                <motion.div variants={fadeUp} className="space-y-2">
                  <h2 className="text-lg md:text-xl font-medium text-muted-foreground tracking-tight">
                    Hi, I&apos;m
                  </h2>
                  <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-foreground">
                    K. Sri Phani <span className="text-primary">Charan</span>
                  </h1>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <p className="text-lg md:text-xl font-medium text-secondary/80">
                    Software Developer • Full-Stack Developer • AI Enthusiast
                  </p>
                </motion.div>

                <motion.h3
                  variants={blurReveal}
                  className="text-2xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-foreground max-w-xl"
                >
                  Building Intelligent Software That Solves Real-World Problems
                </motion.h3>

                <motion.p
                  variants={fadeUp}
                  className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                >
                  I build modern, scalable software with a focus on full-stack development,
                  artificial intelligence, and interactive user experiences. Passionate about
                  solving real-world problems through clean architecture, thoughtful design,
                  and production-quality engineering.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" size="lg" className="rounded-full group px-8">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5 px-8">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border bg-surface/50 hover:bg-surface hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-primary/10"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative block"
            >
              <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto lg:ml-auto mt-12 lg:mt-0">
                {/* Floating Abstract Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl rotate-12 flex items-center justify-center overflow-hidden group"
                >
                   <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                   <div className="relative z-10 font-code text-xs text-primary/40 space-y-2 select-none p-6">
                      <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="h-full bg-primary"
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      </div>
                      <p>&lt;code&gt;</p>
                      <p className="ml-4">intelligence: true,</p>
                      <p className="ml-4">precision: 1.0,</p>
                      <p className="ml-4">innovation: &quot;infinite&quot;</p>
                      <p>&lt;/code&gt;</p>
                   </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 -right-4 w-48 h-48 bg-surface/40 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl -rotate-6 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent" />
                  <div className="flex flex-col h-full p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Code className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-white/5 rounded-full" />
                      <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-pulse" />

                {/* Decorative Geometric Rings */}
                <div className="absolute inset-0 border border-white/[0.05] rounded-full scale-110 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 border border-white/[0.03] rounded-full scale-125 animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </motion.div>
          </div>
        </Container>
      </MaxWidthWrapper>
    </Section>
  )
}
