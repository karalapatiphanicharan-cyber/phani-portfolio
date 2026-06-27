"use client"

import { motion } from "framer-motion"
import { Section, MaxWidthWrapper, Grid } from "@/components/layout/layout"
import { Card } from "@/components/cards/card"
import { Badge } from "@/components/ui/badge"
import { fadeUp, staggerContainer } from "@/lib/animations"
import {
  Code,
  Monitor,
  Server,
  Database,
  Sparkles,
  Settings
} from "lucide-react"

const skillsData = [
  {
    title: "Programming Languages",
    description: "Languages I use for building scalable software.",
    icon: Code,
    color: "text-blue-400",
    accent: "from-blue-500/10 to-transparent",
    technologies: ["Java", "Python", "JavaScript", "C"]
  },
  {
    title: "Frontend Development",
    description: "Modern frontend technologies for building responsive interfaces.",
    icon: Monitor,
    color: "text-purple-400",
    accent: "from-purple-500/10 to-transparent",
    technologies: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Backend Development",
    description: "Backend frameworks and API development.",
    icon: Server,
    color: "text-emerald-400",
    accent: "from-emerald-500/10 to-transparent",
    technologies: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
  },
  {
    title: "Databases",
    description: "Modern data storage technologies.",
    icon: Database,
    color: "text-amber-400",
    accent: "from-amber-500/10 to-transparent",
    technologies: ["MongoDB", "MySQL", "IndexedDB"]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "AI tools and frameworks used in my projects.",
    icon: Sparkles,
    color: "text-indigo-400",
    accent: "from-indigo-500/10 to-transparent",
    technologies: ["TensorFlow", "Scikit-learn", "Prompt Engineering", "Gemini AI", "Machine Learning", "Artificial Intelligence"]
  },
  {
    title: "Tools & Platforms",
    description: "Development tools and deployment platforms.",
    icon: Settings,
    color: "text-rose-400",
    accent: "from-rose-500/10 to-transparent",
    technologies: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "npm"]
  }
]

export function Skills() {
  return (
    <Section id="skills" className="relative border-t border-white/[0.02]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[100px] -z-10 pointer-events-none" />

      <MaxWidthWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20 md:space-y-24"
        >
          {/* Section Heading */}
          <motion.div variants={fadeUp} className="text-center space-y-6">
            <h2 className="section-title">Technical Skills</h2>
            <p className="subtitle mx-auto max-w-2xl">
              Technologies I use to design, build, deploy, and scale modern software products.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <Grid cols={3} gap={6} className="md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((skill) => (
              <motion.div key={skill.title} variants={fadeUp} className="flex">
                <Card
                  variant="glass"
                  className="w-full flex flex-col p-8 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Card Accent Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />

                  <div className="space-y-8 relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-xl bg-white/5 ${skill.color} group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 ring-1 ring-white/10`}>
                        <skill.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-heading font-bold tracking-tight">{skill.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="body-text text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {skill.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skill.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Badge
                            variant="glass"
                            className="py-1 px-3 bg-white/5 border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default font-medium text-xs md:text-sm"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </MaxWidthWrapper>
    </Section>
  )
}
