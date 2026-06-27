"use client"

import { useEffect, useRef } from "react"
import { useInView, animate } from "framer-motion"

interface CountUpProps {
  to: number
  duration?: number
  delay?: number
}

export function CountUp({ to, duration = 2, delay = 0 }: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current
      const controls = animate(0, to, {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          node.textContent = Math.round(value).toString()
        },
      })

      return () => controls.stop()
    }
  }, [isInView, to, duration, delay])

  return <span ref={nodeRef}>0</span>
}
