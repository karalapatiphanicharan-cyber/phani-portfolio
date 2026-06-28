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
  indigo: {
    text: "text-indigo-400",
    bg: "bg-indigo-400",
    border: "border-indigo-400/20",
    glow: "shadow-indigo-500/20"
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

          {/* Custom Illustrations */}
          {project.id === "shortify-ai" ? (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* AI Core (Centerpiece) */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 90, 180, 270, 360],
                  boxShadow: [
                    "0 0 40px rgba(59,130,246,0.3)",
                    "0 0 60px rgba(139,92,246,0.4)",
                    "0 0 40px rgba(59,130,246,0.3)"
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="relative z-30 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 backdrop-blur-xl border border-white/20 flex items-center justify-center"
              >
                <span className="text-6xl md:text-7xl drop-shadow-2xl select-none">🤖</span>
                {/* Internal Pulsing Core */}
                <div className="absolute inset-2 rounded-full bg-blue-400/10 animate-pulse" />
              </motion.div>

              {/* Floating Document Pages (Flowing In) */}
              <div className="absolute left-8 md:left-16 space-y-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`doc-${i}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{
                      x: [0, 60, 0],
                      y: [0, -10, 10, 0],
                      opacity: [0.4, 0.8, 0.4],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-16 md:w-16 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex flex-col p-2 space-y-1.5"
                  >
                    <div className="w-full h-1 bg-white/40 rounded-full" />
                    <div className="w-4/5 h-1 bg-white/20 rounded-full" />
                    <div className="w-full h-1 bg-white/20 rounded-full" />
                    <div className="w-3/4 h-1 bg-white/20 rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Summary Card (Emerging Out) */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{
                  x: [0, -30, 0],
                  y: [0, 10, -10, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute right-8 md:right-16 z-40 w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl flex flex-col p-4 space-y-3"
              >
                <div className="w-1/3 h-2 bg-blue-400/60 rounded-full" />
                <div className="w-full h-1.5 bg-white/40 rounded-full" />
                <div className="w-full h-1.5 bg-white/40 rounded-full" />
                <div className="flex justify-between items-center pt-2">
                  <div className="w-8 h-1.5 bg-blue-400/40 rounded-full" />
                  <span className="text-xs">✨</span>
                </div>
              </motion.div>

              {/* Connection Lines (Abstract) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                <motion.path
                  d="M20,30 Q40,50 50,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M20,70 Q40,50 50,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M50,50 Q60,50 80,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>

              {/* Sparkles & Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.sin(i) * 60,
                    y: Math.cos(i) * 60
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute z-50 text-blue-400/60 pointer-events-none"
                >
                  ✨
                </motion.div>
              ))}
            </div>
          ) : project.id === "ai-knowledge-assistant" ? (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* Document/Knowledge Core */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  boxShadow: ["0 0 20px rgba(99,102,241,0.2)", "0 0 40px rgba(99,102,241,0.4)", "0 0 20px rgba(99,102,241,0.2)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30 w-32 h-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex flex-col p-4 space-y-3"
              >
                <div className="w-1/2 h-2 bg-indigo-400/50 rounded-full" />
                <div className="w-full h-1.5 bg-white/20 rounded-full" />
                <div className="w-full h-1.5 bg-white/20 rounded-full" />
                <div className="w-3/4 h-1.5 bg-white/20 rounded-full" />
                <div className="w-full h-1.5 bg-white/20 rounded-full" />
                <div className="flex-1" />
                <div className="flex justify-between items-center">
                  <div className="w-8 h-1.5 bg-indigo-400/30 rounded-full" />
                  <span className="text-xl">🤖</span>
                </div>
              </motion.div>

              {/* Vector Nodes */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`node-${i}`}
                  animate={{
                    x: [0, Math.cos(i * 72) * 100, 0],
                    y: [0, Math.sin(i * 72) * 100, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-4 h-4 bg-indigo-400/40 rounded-full border border-white/30 backdrop-blur-sm"
                />
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                <motion.circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
              </svg>
            </div>
          ) : project.id === "expense-tracker" ? (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* Wallet/Card Core */}
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
                className="relative z-30 w-48 h-32 bg-gradient-to-br from-emerald-500/40 to-teal-600/40 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl flex flex-col p-5 justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-8 bg-amber-400/60 rounded-md" />
                  <span className="text-2xl">💳</span>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-1.5 bg-white/20 rounded-full" />
                  <div className="w-2/3 h-1.5 bg-white/20 rounded-full" />
                </div>
              </motion.div>

              {/* Rising Charts */}
              <div className="absolute bottom-12 right-12 flex items-end gap-1.5">
                {[40, 70, 50, 90, 60].map((h, i) => (
                  <motion.div
                    key={`bar-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: h }}
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                    className="w-3 bg-emerald-400/40 rounded-t-sm border-t border-white/20"
                  />
                ))}
              </div>

              {/* Floating Money Icons */}
              <motion.div
                animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-12 left-16 text-3xl"
              >
                💰
              </motion.div>
            </div>
          ) : project.id === "fake-news-detection-ml" ? (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* Newspaper/Article Element */}
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-30 w-40 h-52 bg-white/10 backdrop-blur-xl border border-white/20 rounded-sm p-4 space-y-3"
              >
                <div className="w-full h-4 bg-white/30 rounded-sm" />
                <div className="w-full h-1 bg-white/10 rounded-full" />
                <div className="w-full h-1 bg-white/10 rounded-full" />
                <div className="w-3/4 h-1 bg-white/10 rounded-full" />
                <div className="w-full h-20 bg-blue-500/20 rounded-md border border-white/10 flex items-center justify-center">
                   <span className="text-3xl">📰</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full" />
                <div className="w-full h-1 bg-white/10 rounded-full" />
              </motion.div>

              {/* AI Verification Scanner */}
              <motion.div
                animate={{ y: [-100, 100, -100] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute z-40 w-52 h-1 bg-blue-400/60 shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              />

              {/* Confidence Meter */}
              <div className="absolute top-12 right-12 w-20 h-20 rounded-full border-4 border-white/10 flex items-center justify-center">
                 <motion.div
                   animate={{ rotate: [0, 270, 0] }}
                   transition={{ duration: 5, repeat: Infinity }}
                   className="w-1 h-8 bg-blue-400 origin-bottom rounded-full"
                   style={{ bottom: "50%" }}
                 />
                 <span className="absolute bottom-2 text-[10px] font-bold">ML SCORE</span>
              </div>
            </div>
          ) : project.id === "customer-churn-prediction" ? (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* Customer Analytics Grid */}
              <div className="grid grid-cols-3 gap-4 relative z-30">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`user-${i}`}
                    animate={{
                      scale: i === 1 || i === 4 ? [1, 1.1, 1] : 1,
                      backgroundColor: i === 1 || i === 4 ? "rgba(139, 92, 246, 0.3)" : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
                  >
                    <span className="text-xl">{i === 1 || i === 4 ? "⚠️" : "👤"}</span>
                  </motion.div>
                ))}
              </div>

              {/* Predictive Graph Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <motion.path
                  d="M10,80 L30,60 L50,85 L70,40 L90,20"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.5)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>

              {/* Status Badge */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-12 right-12 bg-purple-500/40 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full text-[10px] font-bold"
              >
                CHURN RISK: HIGH
              </motion.div>
            </div>
          ) : project.id === "vertexflow" ? (
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px"
                }}
              />

              {/* Network Topology SVGs */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {/* Edges with gradients */}
                <defs>
                  <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
                  </linearGradient>
                </defs>

                {/* Connections */}
                <g stroke="url(#edgeGradient)" strokeWidth="0.5">
                  <line x1="20" y1="30" x2="50" y2="20" />
                  <line x1="20" y1="30" x2="35" y2="60" />
                  <line x1="50" y1="20" x2="80" y2="40" />
                  <line x1="35" y1="60" x2="65" y2="75" />
                  <line x1="80" y1="40" x2="65" y2="75" />
                  <line x1="50" y1="20" x2="65" y2="75" />
                  <line x1="20" y1="30" x2="65" y2="75" />
                </g>

                {/* Animated Path */}
                <motion.path
                  d="M20,30 L50,20 L80,40 L65,75"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Glowing Nodes */}
              <div className="absolute inset-0">
                {[
                  { x: 20, y: 30, color: "blue" },
                  { x: 50, y: 20, color: "indigo" },
                  { x: 80, y: 40, color: "purple" },
                  { x: 35, y: 60, color: "blue" },
                  { x: 65, y: 75, color: "indigo" }
                ].map((node, i) => (
                  <motion.div
                    key={`node-${i}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    className="absolute -ml-2.5 -mt-2.5 w-5 h-5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]",
                      node.color === "blue" ? "bg-blue-400 text-blue-400" :
                      node.color === "indigo" ? "bg-indigo-400 text-indigo-400" : "bg-purple-400 text-purple-400"
                    )} />
                  </motion.div>
                ))}
              </div>

              {/* Floating UI Elements */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-12 left-12 p-3 rounded-xl bg-black/20 backdrop-blur-xl border border-white/10 flex flex-col gap-2"
              >
                <div className="flex gap-1">
                  <div className="w-8 h-1.5 bg-blue-500/50 rounded-full" />
                  <div className="w-4 h-1.5 bg-white/20 rounded-full" />
                </div>
                <div className="w-12 h-1.5 bg-white/10 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-16 right-16 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
              >
                <div className="text-[10px] font-bold text-white/40 tracking-widest mb-1">ALGORITHM</div>
                <div className="text-sm font-bold text-white">Dijkstra&apos;s</div>
              </motion.div>
            </div>
          ) : (
            <>
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
            </>
          )}

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
          {project.liveUrl && (
            <Button
              variant="primary"
              className="flex-1 rounded-xl h-14 text-base font-semibold gap-2 shadow-lg"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
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
