"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section, MaxWidthWrapper } from "@/components/layout/layout"
import { ProjectCard } from "@/components/cards/project-card"
import { mainProjects, studyProjects, gameProjects, aiProjects, mlProjects } from "@/lib/projects-data"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { cn } from "@/lib/utils"

const categories = [
  { id: "main-projects", label: "Main Projects", data: mainProjects },
  { id: "study-visualization", label: "Study & Visualization", data: studyProjects },
  { id: "games", label: "Games", data: gameProjects },
  { id: "ai-utilities", label: "AI Utilities", data: aiProjects },
  { id: "ml-projects", label: "ML Projects", data: mlProjects },
]

export function Projects() {
  const [activeTab, setActiveTab] = React.useState("main-projects")

  const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0]

  return (
    <Section id="projects" className="relative border-t border-white/[0.02] bg-background/50">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-500/5 blur-[100px] rounded-full" />
      </div>

      <MaxWidthWrapper>
        <div className="space-y-16 md:space-y-24">
          {/* Projects Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="section-title">Projects</h2>
            <p className="subtitle mx-auto max-w-3xl">
              A curated collection of AI-powered applications, full-stack products, and modern software built to solve real-world problems through thoughtful engineering and user-focused design.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="sticky top-20 z-40 py-6 -mx-4 px-4 bg-background/80 backdrop-blur-md border-y border-white/[0.05]">
            <div className="flex items-center justify-center gap-2 md:gap-8 overflow-x-auto no-scrollbar pb-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap outline-none",
                    activeTab === category.id
                      ? "text-primary"
                      : "text-muted-foreground/60 hover:text-foreground"
                  )}
                >
                  {category.label}
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Showcase Area */}
          <div className="min-h-[600px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-20 md:space-y-32"
              >
                {/* Category Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{activeCategory.label}</h3>
                  <p className="body-text max-w-2xl text-lg">
                    {activeTab === "main-projects" && "Production-ready software products built using Artificial Intelligence, Full Stack Development, scalable architecture, and modern UI/UX principles."}
                    {activeTab === "study-visualization" && "Interactive educational software and visualization tools designed to simplify complex computer science concepts through modern UI, real-time simulations, and algorithm visualization."}
                    {activeTab === "games" && "Engaging and interactive games and simulations built with modern web technologies, focusing on performance, physics-based mechanics, and user experience."}
                    {activeTab === "ai-utilities" && "Powerful AI-driven tools and utilities designed to enhance productivity, refine content, and solve specific problems using state-of-the-art language models."}
                    {activeTab === "ml-projects" && "Production-ready machine learning applications featuring advanced NLP, predictive analytics, and explainable AI models integrated with modern web dashboards."}
                  </p>
                </div>

                {/* Projects List with Stagger */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-0"
                >
                  {activeCategory.data.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}
