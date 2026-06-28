"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight, Download, Code } from "lucide-react"
import { Button } from "@/components/buttons/button"
import { Badge } from "@/components/ui/badge"
import { Section, MaxWidthWrapper, Container } from "@/components/layout/layout"
import { fadeUp, blurReveal, staggerContainer } from "@/lib/animations"
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, InstagramIcon } from "@/components/ui/icons"

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
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/phani_charan01/?hl=en",
  },
]

export function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const elem = document.getElementById("projects")
    if (elem) {
      const offset = 80
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
    <Section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
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
                  <p className="text-lg md:text-xl font-medium text-muted-foreground tracking-tight">
                    Hi, I&apos;m
                  </p>
                  <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-foreground">
                    K. Sri Phani <span className="text-primary">Charan</span>
                  </h1>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <p className="text-lg md:text-xl font-medium text-secondary/80">
                    Software Developer • Full-Stack Developer • AI Enthusiast
                  </p>
                </motion.div>

                <motion.h2
                  variants={blurReveal}
                  className="text-2xl md:text-4xl font-heading font-bold leading-tight tracking-tight text-foreground max-w-xl"
                >
                  Building Intelligent Software That Solves Real-World Problems
                </motion.h2>

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
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full group px-8"
                  onClick={scrollToProjects}
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5 px-8" asChild>
                  <a
                    href="/resume/PhaniCharanResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(59,130,246,0.3)"
                    }}
                    className="p-3 rounded-full border border-border bg-surface/50 hover:bg-surface hover:border-primary/50 transition-all duration-300 group shadow-sm"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
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
