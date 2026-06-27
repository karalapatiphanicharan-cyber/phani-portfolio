"use client"

import { motion } from "framer-motion"
import { Section, MaxWidthWrapper, Grid } from "@/components/layout/layout"
import { Card } from "@/components/cards/card"
import { CountUp } from "@/components/animations/count-up"
import { fadeUp, staggerContainer } from "@/lib/animations"

const metrics = [
  {
    number: 11,
    suffix: "+",
    title: "Software Products Built",
    description: "Production-ready software across AI, education, and developer tools.",
  },
  {
    number: 170,
    suffix: "+",
    title: "LeetCode Problems Solved",
    description: "Consistent problem solving and algorithm practice.",
  },
  {
    number: 700,
    suffix: "+",
    title: "GitHub Contributions",
    description: "Continuous development and open-source contributions.",
  },
  {
    number: 4,
    suffix: "+",
    title: "Professional Certifications",
    description: "Professional learning across AI, databases, and modern software development.",
  },
]

export function Metrics() {
  return (
    <Section className="py-20 bg-background/50 relative">
      <MaxWidthWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid cols={4} gap={6}>
            {metrics.map((metric, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  variant="glass"
                  className="group flex flex-col items-center text-center space-y-4 h-full"
                >
                  <div className="flex items-baseline font-heading font-bold text-4xl md:text-5xl text-primary">
                    <CountUp to={metric.number} />
                    <span>{metric.suffix}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {metric.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  {/* Subtle Glow Hover effect handled by Card component,
                      but adding a custom accent for this section */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </MaxWidthWrapper>
    </Section>
  )
}
