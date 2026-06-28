"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Node {
  id: number
  x: number
  y: number
  size: number
}

interface Connection {
  from: number
  to: number
}

interface TechChip {
  id: string
  label: string
  icon: string
  x: number
  y: number
  delay: number
  mobileHidden?: boolean
}

// Deterministic nodes for a premium, stable feel
const FIXED_NODES: Node[] = [
  { id: 0, x: 50, y: 50, size: 12 }, // Center Node
  { id: 1, x: 20, y: 25, size: 6 },
  { id: 2, x: 80, y: 30, size: 6 },
  { id: 3, x: 25, y: 75, size: 5 },
  { id: 4, x: 75, y: 70, size: 7 },
  { id: 5, x: 50, y: 10, size: 5 },
  { id: 6, x: 10, y: 50, size: 5 },
  { id: 7, x: 90, y: 50, size: 6 },
  { id: 8, x: 50, y: 90, size: 5 },
  { id: 9, x: 15, y: 10, size: 4 },
  { id: 10, x: 85, y: 90, size: 4 },
  { id: 11, x: 5, y: 30, size: 4 },
  { id: 12, x: 95, y: 20, size: 5 },
  { id: 13, x: 35, y: 40, size: 7 },
  { id: 14, x: 65, y: 45, size: 7 },
]

const FIXED_CONNECTIONS: Connection[] = [
  { from: 0, to: 13 }, { from: 0, to: 14 }, { from: 0, to: 8 },
  { from: 13, to: 1 }, { from: 13, to: 6 }, { from: 13, to: 3 },
  { from: 14, to: 2 }, { from: 14, to: 7 }, { from: 14, to: 4 },
  { from: 1, to: 5 }, { from: 1, to: 9 }, { from: 2, to: 12 },
  { from: 6, to: 11 }, { from: 4, to: 10 }, { from: 7, to: 12 },
  { from: 5, to: 2 }, { from: 3, to: 8 }, { from: 6, to: 3 }
]

// Spread chips widely to prevent overlap and strictly limit count (8 desktop, 6 mobile)
const TECH_CHIPS: TechChip[] = [
  { id: "ai", label: "AI", icon: "🤖", x: 10, y: 15, delay: 0 },
  { id: "react", label: "React", icon: "⚛", x: 88, y: 15, delay: 1 },
  { id: "nextjs", label: "Next.js", icon: "▲", x: 15, y: 85, delay: 2 },
  { id: "typescript", label: "TypeScript", icon: "🧩", x: 92, y: 50, delay: 3 },
  { id: "python", label: "Python", icon: "🐍", x: 85, y: 85, delay: 4 },
  { id: "fastapi", label: "FastAPI", icon: "⚡", x: 60, y: 8, delay: 5, mobileHidden: true },
  { id: "ml", label: "ML", icon: "🧠", x: 40, y: 92, delay: 6, mobileHidden: true },
  { id: "dsa", label: "DSA", icon: "💻", x: 8, y: 50, delay: 9 },
  { id: "tensorflow", label: "TensorFlow", icon: "🔥", x: 80, y: 35, delay: 7, mobileHidden: true },
  { id: "graph", label: "Graph Algorithms", icon: "🕸", x: 20, y: 65, delay: 8, mobileHidden: true },
]

const TOOLTIPS: Record<number, { title: string; desc: string }> = {
  0: { title: "AI Core", desc: "Central Intelligence System" },
  13: { title: "Neural Layer", desc: "Feature Extraction" },
  14: { title: "Logic Gate", desc: "Decision Making" },
  1: { title: "Vision", desc: "Image Processing" },
  2: { title: "NLP", desc: "Language Understanding" },
  4: { title: "Optimizer", desc: "Gradient Descent" },
  7: { title: "Classifier", desc: "Data Sorting" },
}

const CHIP_TOOLTIPS: Record<string, { title: string; desc: string }> = {
  ai: { title: "AI", desc: "Artificial Intelligence" },
  react: { title: "React", desc: "Frontend Development" },
  nextjs: { title: "Next.js", desc: "Full-Stack Framework" },
  typescript: { title: "TypeScript", desc: "Type-Safe Development" },
  python: { title: "Python", desc: "Backend • AI" },
  fastapi: { title: "FastAPI", desc: "REST APIs" },
  ml: { title: "Machine Learning", desc: "Predictive Models" },
  dsa: { title: "DSA", desc: "Data Structures" },
  tensorflow: { title: "TensorFlow", desc: "Deep Learning" },
  graph: { title: "Graph Algorithms", desc: "Visualization" },
}

export function AINeuralNetwork() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [hoveredChip, setHoveredChip] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full group perspective-1000">
      {/* Mouse Parallax Wrapper */}
      <motion.div
        animate={{
          x: mousePos.x * 20,
          y: mousePos.y * 20,
          rotateX: mousePos.y * -5,
          rotateY: mousePos.x * 5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        className="absolute inset-0 w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-2xl">
          <defs>
            <radialGradient id="centerGlow">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines */}
          {FIXED_CONNECTIONS.map((conn, i) => {
            const from = FIXED_NODES.find(n => n.id === conn.from)!
            const to = FIXED_NODES.find(n => n.id === conn.to)!
            return (
              <g key={`conn-${i}`}>
                <motion.line
                  x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke="currentColor"
                  className="text-primary/20"
                  strokeWidth="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.05 }}
                />

                {/* Data Flow Particles */}
                <motion.circle
                  r="0.5"
                  fill="#3B82F6"
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur={`${4 + (i % 4)}s`}
                    repeatCount="indefinite"
                    path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                  />
                </motion.circle>
              </g>
            )
          })}

          {/* Nodes */}
          {FIXED_NODES.map((node) => (
            <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}>
              {/* Glow Effect for Center Node */}
              {node.id === 0 && (
                <motion.circle
                  cx={node.x} cy={node.y} r={node.size * 1.8}
                  fill="url(#centerGlow)"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <motion.circle
                cx={node.x} cy={node.y}
                r={node.size / 4}
                fill={node.id === 0 ? "#3B82F6" : hoveredNode === node.id ? "#8B5CF6" : "#111827"}
                stroke={node.id === 0 ? "#8B5CF6" : "#3B82F6"}
                strokeWidth="0.6"
                className="cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.3, strokeWidth: 1.2, fill: "#3B82F6" }}
              />

              {/* Pulsing Core Animation */}
              {node.id === 0 && (
                <motion.circle
                  cx={node.x} cy={node.y} r={node.size / 4}
                  fill="transparent"
                  stroke="#3B82F6"
                  strokeWidth="0.3"
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", repeatDelay: 2 }}
                />
              )}
            </g>
          ))}
        </svg>

        {/* Floating Tech Chips */}
        <AnimatePresence>
          {TECH_CHIPS.map((chip) => (
            <motion.div
              key={chip.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                position: "absolute",
                left: `${chip.x}%`,
                top: `${chip.y}%`,
                transform: "translate(-50%, -50%)"
              }}
              className={cn(chip.mobileHidden && "hidden md:block")}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 5 + chip.delay,
                  delay: chip.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onMouseEnter={() => setHoveredChip(chip.id)}
                onMouseLeave={() => setHoveredChip(null)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-surface/40 backdrop-blur-md shadow-xl hover:border-primary/50 transition-all duration-300 group cursor-default whitespace-nowrap"
              >
                <span className="text-sm filter drop-shadow-sm">{chip.icon}</span>
                <span className="text-[10px] font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-wider">{chip.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Node Tooltips */}
        {hoveredNode !== null && TOOLTIPS[hoveredNode] && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute z-50 pointer-events-none"
            style={{
              left: `${FIXED_NODES.find(n => n.id === hoveredNode)!.x}%`,
              top: `${FIXED_NODES.find(n => n.id === hoveredNode)!.y}%`,
              transform: "translate(-50%, -140%)"
            }}
          >
            <div className="px-3 py-2 rounded-lg bg-surface/95 border border-primary/20 backdrop-blur-xl shadow-2xl min-w-[140px] text-center">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-0.5">{TOOLTIPS[hoveredNode].title}</p>
              <p className="text-[10px] text-white/60 font-medium">{TOOLTIPS[hoveredNode].desc}</p>
            </div>
            <div className="w-2.5 h-2.5 bg-surface/95 border-r border-b border-primary/20 rotate-45 mx-auto -mt-1.5" />
          </motion.div>
        )}

        {/* Chip Tooltips */}
        {hoveredChip !== null && CHIP_TOOLTIPS[hoveredChip] && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute z-50 pointer-events-none"
            style={{
              left: `${TECH_CHIPS.find(c => c.id === hoveredChip)!.x}%`,
              top: `${TECH_CHIPS.find(c => c.id === hoveredChip)!.y}%`,
              transform: "translate(-50%, -160%)"
            }}
          >
            <div className="px-3 py-2 rounded-lg bg-surface/95 border border-secondary/20 backdrop-blur-xl shadow-2xl min-w-[120px] text-center">
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-0.5">{CHIP_TOOLTIPS[hoveredChip].title}</p>
              <p className="text-[10px] text-white/60 font-medium">{CHIP_TOOLTIPS[hoveredChip].desc}</p>
            </div>
            <div className="w-2 h-2 bg-surface/95 border-r border-b border-secondary/20 rotate-45 mx-auto -mt-1.2" />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
