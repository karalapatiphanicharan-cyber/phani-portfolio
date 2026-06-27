"use client"

import { motion } from "framer-motion"
import { Section, MaxWidthWrapper } from "@/components/layout/layout"
import { Card } from "@/components/cards/card"
import { Badge } from "@/components/ui/badge"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { User, GraduationCap, Target, Zap, Info, MapPin } from "lucide-react"

export function About() {
  return (
    <Section id="about" className="py-20 md:py-32">
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
            <h2 className="section-title">About Me</h2>
            <p className="subtitle mx-auto max-w-2xl">
              A quick overview of who I am, what I build, and where I&apos;m heading.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

            {/* Card 1: Who I Am */}
            <motion.div variants={fadeUp} className="md:col-span-7 lg:col-span-8">
              <Card variant="glass" className="h-full flex flex-col justify-between p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <User className="w-6 h-6" />
                    <h3 className="text-xl font-heading font-bold">Who I Am</h3>
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                    Passionate Software Developer pursuing B.Tech in Computer Science & Engineering (AI & ML).
                  </p>
                  <p className="body-text">
                    I enjoy building modern full-stack applications, AI-powered tools, educational platforms, and interactive software that solve real-world problems through clean architecture and thoughtful user experiences.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Card 2: Education */}
            <motion.div variants={fadeUp} className="md:col-span-5 lg:col-span-4">
              <Card variant="glass" className="h-full space-y-6 p-8 border-primary/10">
                <div className="flex items-center gap-3 text-secondary">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-heading font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground">B.Tech in CSE</h4>
                    <p className="text-sm text-muted-foreground">Artificial Intelligence & Machine Learning</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GITAM University</p>
                    <p className="text-sm text-muted-foreground italic">Expected Graduation 2027</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Visakhapatnam, Andhra Pradesh, India</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Card 3: Career Goal */}
            <motion.div variants={fadeUp} className="md:col-span-5 lg:col-span-4">
              <Card variant="glass" className="h-full space-y-4 p-8">
                <div className="flex items-center gap-3 text-primary">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-heading font-bold">Career Goal</h3>
                </div>
                <p className="body-text text-sm md:text-base">
                  Build scalable software for innovative teams while continuously improving my engineering skills. Contribute to impactful products that combine clean architecture, modern technologies, and AI.
                </p>
              </Card>
            </motion.div>

            {/* Card 4: Current Focus */}
            <motion.div variants={fadeUp} className="md:col-span-7 lg:col-span-8">
              <Card variant="glass" className="h-full space-y-6 p-8">
                <div className="flex items-center gap-3 text-secondary">
                  <Zap className="w-6 h-6" />
                  <h3 className="text-xl font-heading font-bold">Current Focus</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full Stack Development",
                    "AI Applications",
                    "Modern UI/UX",
                    "Educational Software",
                    "Backend Systems",
                    "Developer Tools"
                  ].map((item) => (
                    <Badge
                      key={item}
                      variant="glass"
                      className="py-1.5 px-4 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors cursor-default text-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Card 5: Quick Facts */}
            <motion.div variants={fadeUp} className="md:col-span-12">
              <Card variant="glass" className="space-y-8 p-8 md:p-10">
                <div className="flex items-center gap-3 text-primary">
                  <Info className="w-6 h-6" />
                  <h3 className="text-xl font-heading font-bold">Quick Facts</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {[
                    "Software Developer", "AI Enthusiast", "Full Stack Developer", "Open Source Learner", "Problem Solver",
                    "Java", "Python", "React", "Next.js", "FastAPI", "Node.js", "MongoDB", "MySQL",
                    "Prompt Engineering", "TensorFlow", "Git", "GitHub", "Vercel", "Render"
                  ].map((fact) => (
                    <Badge
                      key={fact}
                      variant="glass"
                      className="py-2 px-5 bg-white/5 border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-sm md:text-base"
                    >
                      {fact}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

          </div>
        </motion.div>
      </MaxWidthWrapper>
    </Section>
  )
}
