export interface Project {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  visual: {
    gradient: string;
    emojis: string[];
    color: string;
  };
}

export const mainProducts: Project[] = [
  {
    id: "hirelens",
    category: "AI Resume Intelligence Platform",
    name: "HireLens",
    subtitle: "AI-powered resume optimization and interview prep.",
    description: "AI-powered platform that helps job seekers optimize resumes using ATS analysis, resume intelligence, job description matching, and personalized interview preparation.",
    technologies: ["React", "TypeScript", "FastAPI", "Python", "Tailwind CSS"],
    features: ["Resume Parsing", "ATS Analysis", "Resume Intelligence", "Job Matching", "Interview Preparation", "PDF Reports"],
    liveUrl: "https://hire-lens-bice.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/HireLens",
    visual: {
      gradient: "from-blue-600 via-blue-500 to-purple-600",
      emojis: ["🤖", "📄", "✨"],
      color: "blue",
    },
  },
  {
    id: "repomind-ai",
    category: "Multi-Agent Repository Intelligence Platform",
    name: "RepoMind AI",
    subtitle: "Collaborative AI agents for deep repository analysis.",
    description: "Analyzes GitHub repositories using collaborative AI agents to evaluate architecture, documentation, security, and overall code quality.",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Gemini AI"],
    features: ["Repository Analysis", "Architecture Review", "Security Review", "Documentation", "Engineering Insights"],
    liveUrl: "https://repomind-ai-blond.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/repomind-ai",
    visual: {
      gradient: "from-blue-500 via-cyan-500 to-blue-400",
      emojis: ["🧠", "⚡", "📦"],
      color: "cyan",
    },
  },
  {
    id: "stealthchat",
    category: "Privacy-First Messaging Platform",
    name: "StealthChat",
    subtitle: "Secure, anonymous, and temporary communication.",
    description: "Real-time anonymous messaging platform featuring temporary rooms, secure communication, file sharing, and privacy-focused interactions.",
    technologies: ["React", "Node.js", "Express", "Socket.IO"],
    features: ["Anonymous Chat", "Temporary Rooms", "File Sharing", "Privacy Mode", "Real-Time Messaging"],
    liveUrl: "https://stealth-chat-azure.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/StealthChat",
    visual: {
      gradient: "from-emerald-600 via-teal-500 to-blue-600",
      emojis: ["🔒", "💬", "🛡️"],
      color: "emerald",
    },
  },
  {
    id: "notely",
    category: "Offline-First Note Taking Platform",
    name: "Notely",
    subtitle: "Privacy-focused notes with offline-first architecture.",
    description: "Privacy-focused note-taking application built around offline-first architecture with local storage, attachments, favorites, and archive support.",
    technologies: ["React", "IndexedDB", "PWA"],
    features: ["Notes", "Offline", "Archive", "Favorites", "Attachments", "To-Do Lists"],
    liveUrl: "https://notely-seven-phi.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/Notely",
    visual: {
      gradient: "from-orange-500 via-amber-500 to-orange-400",
      emojis: ["📝", "📌", "📂"],
      color: "orange",
    },
  },
];

export const studyProjects: Project[] = [
  {
    id: "arrayiq",
    category: "Algorithm Visualization Platform",
    name: "ArrayIQ",
    subtitle: "Visualize algorithms. Understand complexity.",
    description: "ArrayIQ is an interactive educational platform that visualizes sorting and searching algorithms with animated execution, benchmarking, and real-time performance comparisons to make algorithm learning intuitive and engaging.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Sorting Algorithms", "Searching Algorithms", "Visualization", "Benchmarking", "Real-Time Animation", "Educational Platform"],
    liveUrl: "https://arrayiq.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/arrayiq",
    visual: {
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      emojis: ["📊", "⚡", "📈"],
      color: "blue",
    },
  },
  {
    id: "schedulix",
    category: "CPU Scheduling Simulator",
    name: "Schedulix",
    subtitle: "Learn CPU scheduling through interactive simulation.",
    description: "Schedulix is an educational operating systems simulator that visualizes CPU scheduling algorithms using animated Gantt charts, process queues, execution timelines, and detailed performance metrics.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["FCFS", "SJF", "Priority", "Round Robin", "Gantt Chart", "Performance Metrics"],
    liveUrl: "https://schedulix-theta.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/Schedulix",
    visual: {
      gradient: "from-indigo-600 via-indigo-500 to-purple-600",
      emojis: ["⚙️", "🖥️", "📋"],
      color: "indigo",
    },
  },
  {
    id: "seekflow",
    category: "Disk Scheduling Visualizer",
    name: "SeekFlow",
    subtitle: "Interactive disk scheduling made simple.",
    description: "SeekFlow is an educational visualization tool that demonstrates disk scheduling algorithms through animated disk head movement, traversal paths, algorithm comparison, and performance analysis.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["FCFS", "SCAN", "LOOK", "Disk Traversal", "Interactive Graphs", "Performance Analysis"],
    liveUrl: "https://seekflow-eight.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/seekflow",
    visual: {
      gradient: "from-cyan-500 via-cyan-400 to-blue-500",
      emojis: ["💿", "📍", "📡"],
      color: "cyan",
    },
  },
];
