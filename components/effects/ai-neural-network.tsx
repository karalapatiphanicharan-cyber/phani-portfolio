import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  isCenter?: boolean;
  label?: string;
  desc?: string;
}

interface Connection {
  from: number;
  to: number;
}

const techData = [
  { name: "AI", desc: "Artificial Intelligence" },
  { name: "Python", desc: "Backend • AI" },
  { name: "React", desc: "Frontend Development" },
  { name: "Next.js", desc: "Full-Stack Framework" },
  { name: "TypeScript", desc: "Type-Safe Development" },
  { name: "FastAPI", desc: "REST APIs" },
  { name: "Machine Learning", desc: "Predictive Models" },
  { name: "TensorFlow", desc: "Deep Learning" },
  { name: "Graph Algorithms", desc: "Visualization" },
  { name: "DSA", desc: "Problem Solving" },
];

export const AINeuralNetwork: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const translateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const { nodes, connections } = useMemo(() => {
    const nodes: Node[] = [];
    const numNodes = 15;

    // Center node
    nodes.push({
      id: 0,
      x: 50,
      y: 50,
      isCenter: true,
      label: techData[0].name,
      desc: techData[0].desc
    });

    // Create other nodes in concentric rings
    for (let i = 1; i < numNodes; i++) {
      const ring = i <= 6 ? 0 : 1;
      const ringNodes = ring === 0 ? 6 : 8;
      const indexInRing = ring === 0 ? i - 1 : i - 7;

      const angle = (indexInRing / ringNodes) * Math.PI * 2;
      const radius = ring === 0 ? 22 : 38;
      const x = 50 + Math.cos(angle) * radius + (Math.random() - 0.5) * 4;
      const y = 50 + Math.sin(angle) * radius + (Math.random() - 0.5) * 4;

      nodes.push({
        id: i,
        x,
        y,
        label: i < techData.length ? techData[i].name : undefined,
        desc: i < techData.length ? techData[i].desc : undefined
      });
    }

    const connections: Connection[] = [];
    nodes.forEach((node, i) => {
      if (i !== 0) {
        // Connect to center if in first ring
        if (i <= 6) {
          connections.push({ from: 0, to: i });
        }
      }

      // Connect to neighbors
      const neighbors = nodes
        .map((other, j) => ({ index: j, dist: Math.hypot(node.x - other.x, node.y - other.y) }))
        .filter(d => d.index !== i && d.index !== 0)
        .sort((a, b) => a.dist - b.dist);

      neighbors.slice(0, 1).forEach(n => {
        if (!connections.some(c => (c.from === i && c.to === n.index) || (c.from === n.index && c.to === i))) {
          connections.push({ from: i, to: n.index });
        }
      });
    });

    return { nodes, connections };
  }, []);

  const visibleChips = isMobile ? techData.slice(0, 6) : techData.slice(0, 8);

  const getChipStyle = (index: number) => {
    const positions = [
      { left: '5%', top: '20%' },
      { left: '75%', top: '15%' },
      { left: '10%', top: '75%' },
      { left: '80%', top: '80%' },
      { left: '45%', top: '5%' },
      { left: '50%', top: '92%' },
      { left: '2%', top: '50%' },
      { left: '88%', top: '50%' },
    ];
    return positions[index % positions.length];
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Connection Lines & Particles */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {connections.map((conn, idx) => {
            const from = nodes[conn.from];
            const to = nodes[conn.to];
            const pathD = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;

            return (
              <g key={`group-${idx}`}>
                <motion.path
                  d={pathD}
                  stroke="rgba(59, 130, 246, 0.15)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: idx * 0.05 }}
                />

                {/* Data flow particles */}
                <motion.circle
                  r="0.6"
                  fill="#3B82F6"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: "100%",
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear"
                  }}
                  style={{ offsetPath: `path("${pathD}")` }}
                />
              </g>
            );
          })}

          {/* Central Pulse */}
          {connections.filter(c => c.from === 0 || c.to === 0).map((conn, idx) => {
            const from = nodes[conn.from];
            const to = nodes[conn.to];
            const start = from.id === 0 ? from : to;
            const end = from.id === 0 ? to : from;
            const pathD = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

            return (
              <motion.circle
                key={`pulse-${idx}`}
                r="0.8"
                fill="#8B5CF6"
                filter="url(#glow)"
                initial={{ opacity: 0, offsetDistance: "0%" }}
                animate={{
                  opacity: [0, 1, 0],
                  offsetDistance: "100%"
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: idx * 0.3,
                  ease: "easeInOut"
                }}
                style={{ offsetPath: `path("${pathD}")` }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute z-10 cursor-pointer"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
            whileHover={{ scale: 1.4 }}
          >
            {node.isCenter && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <motion.div
              className={`rounded-full ${node.isCenter ? 'w-5 h-5 bg-blue-500' : 'w-2.5 h-2.5 bg-blue-400/80'}`}
              style={{
                boxShadow: node.isCenter
                  ? '0 0 20px #3B82F6, 0 0 40px #3B82F6'
                  : '0 0 10px #60A5FA',
              }}
              animate={node.isCenter ? {
                scale: [1, 1.15, 1],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <AnimatePresence>
              {hoveredNode?.id === node.id && node.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-50 min-w-[140px]"
                >
                  <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <p className="text-xs font-bold text-white relative z-10">{node.label}</p>
                    {node.desc && (
                      <p className="text-[10px] text-white/50 relative z-10 mt-0.5 whitespace-nowrap">{node.desc}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Technology Chips */}
        {visibleChips.map((chip, index) => (
          <motion.div
            key={chip.name}
            className="absolute z-20 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, Math.sin(index) * 10, 0],
            }}
            transition={{
              opacity: { delay: 0.5 + index * 0.1 },
              scale: { delay: 0.5 + index * 0.1 },
              y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
            }}
            style={getChipStyle(index)}
          >
            <span className="text-[10px] md:text-xs font-semibold text-white/90 tracking-wide">
              {chip.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent rounded-full blur-3xl -z-10 opacity-50" />
    </div>
  );
};
