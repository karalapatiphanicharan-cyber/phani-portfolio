"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/buttons/button"
import { Project } from "@/lib/projects-data"
import { cn } from "@/lib/utils"
import { fadeUp } from "@/lib/animations"

interface ProjectCardProps {
  project: Project
  index: number
}

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

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue: {
    text: "text-blue-400",
    bg: "bg-blue-400",
    border: "border-blue-400/20",
    glow: "shadow-blue-500/20"
  },
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-400",
    border: "border-cyan-400/20",
    glow: "shadow-cyan-500/20"
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-400",
    border: "border-emerald-400/20",
    glow: "shadow-emerald-500/20"
  },
  orange: {
    text: "text-orange-400",
    bg: "bg-orange-400",
    border: "border-orange-400/20",
    glow: "shadow-orange-500/20"
  },
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0
  const colors = colorMap[project.visual.color] || colorMap.blue

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32 lg:mb-40 last:mb-0",
      )}
    >
      {/* Visual Card */}
      <div className={cn(
        "lg:col-span-7 relative group",
        isReversed ? "lg:order-2" : "lg:order-1"
      )}>
        <motion.div
          whileHover={{
            y: -10,
            scale: 1.03,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className={cn(
            "relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl",
            "bg-gradient-to-br",
            project.visual.gradient,
            "flex items-center justify-center",
            colors.glow
          )}
        >
          {/* Glassmorphism layer */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

          {/* Soft lighting */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 blur-[80px] rounded-full" />

          {/* Floating shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl rotate-12"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          />

          {/* Main Emoji */}
          <div className="relative z-10">
            <motion.span
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-8xl md:text-9xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none cursor-default"
            >
              {project.visual.emojis[0]}
            </motion.span>
          </div>

          {/* Floating minor emojis */}
          {project.visual.emojis.slice(1).map((emoji, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, i % 2 === 0 ? -15 : 15, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={cn(
                "absolute text-4xl md:text-5xl drop-shadow-xl select-none cursor-default",
                i === 0 ? "top-1/4 right-[20%]" : "bottom-1/4 left-[20%]"
              )}
            >
              {emoji}
            </motion.span>
          ))}

          {/* Category Label on Visual Card */}
          <div className="absolute top-6 left-6">
            <Badge variant="glass" className="bg-black/30 border-white/20 text-white backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wider">
              {project.category}
            </Badge>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className={cn(
        "lg:col-span-5 space-y-8",
        isReversed ? "lg:order-1" : "lg:order-2"
      )}>
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-sm font-bold tracking-widest uppercase",
              colors.text
            )}
          >
            {project.category}
          </motion.span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="text-xl font-medium text-foreground/90 leading-snug">
            {project.subtitle}
          </p>
          <p className="body-text text-muted-foreground text-lg">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="space-y-4">
           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Built With</h4>
           <div className="flex flex-wrap gap-2">
             {project.technologies.map((tech) => (
               <Badge key={tech} variant="glass" className="bg-white/5 border-white/10 hover:border-primary/40 transition-all duration-300 px-3 py-1">
                 {tech}
               </Badge>
             ))}
           </div>
        </div>

        {/* Feature Chips */}
        <div className="space-y-4">
           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Core Features</h4>
           <div className="flex flex-wrap gap-3">
             {project.features.map((feature) => (
               <div key={feature} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-white/5 text-sm text-foreground/80 hover:border-white/20 transition-colors">
                 <div className={cn("w-1.5 h-1.5 rounded-full", colors.bg)} />
                 {feature}
               </div>
             ))}
           </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            variant="primary"
            className="flex-1 rounded-xl h-14 text-base font-semibold gap-2 shadow-lg"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-xl h-14 text-base font-semibold gap-2 bg-white/5 border-white/10 hover:bg-white/10 transition-all"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub <GitHubIcon className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
