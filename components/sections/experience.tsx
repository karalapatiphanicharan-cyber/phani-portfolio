"use client"

import { motion } from "framer-motion"
import { ExternalLink, Briefcase, Award, GraduationCap, Trophy, Brain, Zap, BarChart3 } from "lucide-react"
import { MaxWidthWrapper, Section, Grid } from "@/components/layout/layout"
import { CountUp } from "@/components/animations/count-up"
import {
  internship,
  virtualExperiences,
  certifications,
  achievements
} from "@/lib/experience-data"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-50px" }
}

const itemVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function Experience() {
  return (
    <Section id="experience">
      <MaxWidthWrapper>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-24"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            A snapshot of my professional learning, practical experience, certifications, and technical milestones that reflect my continuous growth as a software developer.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Part 1: Featured Internship */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-space-grotesk">Featured Internship</h3>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      {internship.organization}
                    </span>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">Internship</span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk">
                    {internship.title}
                  </h4>

                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {internship.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Skills Gained</h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white/80 transition-colors group-hover:bg-primary/5 group-hover:border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Abstract Illustration */}
                <div className="relative h-[300px] lg:h-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent flex items-center justify-center overflow-hidden">
                   {/* Background Decorative Elements */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                   <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-[60px]" />

                   {/* Glass Panels & Icons */}
                   <div className="relative flex items-center justify-center">
                      <motion.div
                        initial={{ rotate: -10, y: 20, opacity: 0 }}
                        whileInView={{ rotate: -5, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute -left-12 -top-12 w-48 h-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center"
                      >
                         <Brain className="w-16 h-16 text-primary/60" />
                      </motion.div>

                      <motion.div
                        initial={{ rotate: 10, y: -20, opacity: 0 }}
                        whileInView={{ rotate: 5, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-48 h-64 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6"
                      >
                         <BarChart3 className="w-12 h-12 text-secondary/60 mb-4" />
                         <div className="w-full h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "70%" }}
                              transition={{ duration: 1, delay: 1 }}
                              className="h-full bg-primary/50"
                            />
                         </div>
                         <div className="w-full h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "40%" }}
                              transition={{ duration: 1, delay: 1.2 }}
                              className="h-full bg-secondary/50"
                            />
                         </div>
                         <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "85%" }}
                              transition={{ duration: 1, delay: 1.4 }}
                              className="h-full bg-primary/50"
                            />
                         </div>
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-primary shadow-xl shadow-primary/20"
                      >
                        <Zap className="w-8 h-8 text-white" />
                      </motion.div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Part 2: Virtual Experience Programs */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk">Virtual Experience Programs</h3>
            </div>

            <Grid cols={3} gap={6}>
              {virtualExperiences.map((exp, index) => (
                <motion.div
                  key={exp.organization}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-white/10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {exp.organization}
                    </span>
                    {exp.organization === "Tata" && <BarChart3 className="w-5 h-5 text-muted-foreground/50" />}
                    {exp.organization === "Deloitte" && <Briefcase className="w-5 h-5 text-muted-foreground/50" />}
                    {exp.organization === "Forage" && <GraduationCap className="w-5 h-5 text-muted-foreground/50" />}
                  </div>
                  <h4 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </Grid>

            <motion.div
              className="flex justify-center"
              {...fadeInUp}
            >
              <a
                href="https://www.linkedin.com/in/phani-charan-7335283a5/recent-activity/all"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]"
              >
                View LinkedIn Activity
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Part 3: Professional Certifications */}
          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-3xl font-bold font-space-grotesk mb-4">Professional Certifications</h3>
              <p className="text-muted-foreground">
                Continuous learning through globally recognized certifications and industry-focused courses.
              </p>
            </div>

            <Grid cols={4} gap={6} className="md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariant}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.06] hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6">
                    {cert.organization}
                  </p>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-primary transition-colors"
                  >
                    View Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </Grid>
          </motion.div>

          {/* Part 4: Achievements */}
          <div className="space-y-12">
             <div className="flex items-center justify-center gap-3 mb-16">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="text-3xl font-bold font-space-grotesk">Achievements</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Grid cols={4} gap={6} className="sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariant}
                  className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 group"
                >
                  <div className="text-5xl font-bold font-space-grotesk text-primary mb-2 flex items-center justify-center">
                    <CountUp to={item.value} />
                    {item.suffix && <span>{item.suffix}</span>}
                  </div>
                  <p className="text-muted-foreground font-medium group-hover:text-white/80 transition-colors">
                    {item.label}
                  </p>
                </motion.div>
              ))}
              </Grid>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Section>
  )
}
