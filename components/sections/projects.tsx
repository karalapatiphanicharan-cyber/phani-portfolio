"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section, MaxWidthWrapper } from "@/components/layout/layout"
import { ProjectCard } from "@/components/cards/project-card"
import { mainProducts, studyProjects } from "@/lib/projects-data"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { cn } from "@/lib/utils"

const categories = [
  { id: "main-products", label: "Main Products" },
  { id: "study-visualization", label: "Study & Visualization" },
  { id: "games", label: "Games" },
  { id: "ai-utilities", label: "AI Utilities" },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("main-products")

  // Improved scroll spying for all sections
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["main-products", "study-visualization"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -140 // Adjust based on sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <Section id="projects" className="relative border-t border-white/[0.02] bg-background/50">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-500/5 blur-[100px] rounded-full" />
      </div>

      <MaxWidthWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 md:space-y-24"
        >
          {/* Projects Header */}
          <motion.div variants={fadeUp} className="text-center space-y-6">
            <h2 className="section-title">Projects</h2>
            <p className="subtitle mx-auto max-w-3xl">
              A curated collection of AI-powered applications, full-stack products, and modern software built to solve real-world problems through thoughtful engineering and user-focused design.
            </p>
          </motion.div>

          {/* Sticky Category Navigation */}
          <div className="sticky top-20 z-40 py-6 mb-12 -mx-4 px-4 bg-background/80 backdrop-blur-md border-y border-white/[0.05]">
            <div className="flex items-center justify-center gap-2 md:gap-8 overflow-x-auto no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    activeCategory === category.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Sections Container */}
          <div className="space-y-32 md:space-y-48">
            {/* Main Products Section */}
            <div id="main-products" className="scroll-mt-40 space-y-20 md:space-y-32">
              <motion.div variants={fadeUp} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Main Products</h3>
                <p className="body-text max-w-2xl text-lg">
                  Production-ready software products built using Artificial Intelligence, Full Stack Development, scalable architecture, and modern UI/UX principles.
                </p>
              </motion.div>

              {/* Projects List */}
              <div className="space-y-0">
                {mainProducts.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>

            {/* Study & Visualization Section */}
            <div id="study-visualization" className="scroll-mt-40 space-y-20 md:space-y-32">
              <motion.div variants={fadeUp} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Study & Visualization</h3>
                <p className="body-text max-w-2xl text-lg">
                  Interactive educational software and visualization tools designed to simplify complex computer science concepts through modern UI, real-time simulations, and algorithm visualization.
                </p>
              </motion.div>

              {/* Projects List */}
              <div className="space-y-0">
                {studyProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </Section>
  )
}
