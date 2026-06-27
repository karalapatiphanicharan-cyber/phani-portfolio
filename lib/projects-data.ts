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

export const mainProjects: Project[] = [
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

export const gameProjects: Project[] = [
  {
    id: "rps-arena",
    category: "Interactive Game Simulator",
    name: "RPS Arena Simulator",
    subtitle: "Battle of Rock, Paper, and Scissors.",
    description: "An interactive arena where Rock, Paper, and Scissors entities battle in a physics-based environment. Features customizable entity counts, speed controls, and real-time survivor tracking.",
    technologies: ["React", "TypeScript", "Canvas API", "Tailwind CSS"],
    features: ["Physics Simulation", "Customizable Entities", "Real-time Stats", "Speed Control", "Responsive Design"],
    liveUrl: "https://rps-arena-simulator.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/rps-arena-simulator",
    visual: {
      gradient: "from-orange-600 via-red-500 to-amber-600",
      emojis: ["🪨", "📜", "✂️"],
      color: "orange",
    },
  },
  {
    id: "escape-grid",
    category: "Grid-Based Puzzle Game",
    name: "EscapeGrid",
    subtitle: "Navigate the grid, avoid the traps.",
    description: "A challenging grid-based puzzle game where players must navigate through increasingly difficult levels, avoiding traps and solving spatial puzzles to reach the exit.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Multiple Levels", "Trap Mechanics", "Keyboard Controls", "Progress Saving", "Timer System"],
    liveUrl: "https://escape-grid-ashy.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/EscapeGrid",
    visual: {
      gradient: "from-purple-600 via-indigo-500 to-blue-600",
      emojis: ["🏃‍♂️", "🕸️", "🏰"],
      color: "indigo",
    },
  },
];

export const aiProjects: Project[] = [
  {
    id: "shortify-ai",
    category: "AI Content Summarization Tool",
    name: "Shortify AI",
    subtitle: "Turn long content into concise insights.",
    description: "AI-powered content summarizer that processes articles, documents, and long-form text into structured, easy-to-read summaries using advanced NLP models.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    features: ["AI Summarization", "Text Extraction", "Multiple Formats", "History Tracking", "Export Options"],
    liveUrl: "https://shortify-ai-summarizer.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/shortify-ai-summarizer",
    visual: {
      gradient: "from-blue-600 via-indigo-500 to-purple-600",
      emojis: ["🤖", "📄", "✨"],
      color: "blue",
    },
  },
  {
    id: "humantext",
    category: "AI Content Humanizer",
    name: "HumanText",
    subtitle: "Make AI text sound naturally human.",
    description: "Advanced text refiner that adjusts the tone, flow, and vocabulary of AI-generated content to make it indistinguishable from human writing while maintaining the original intent.",
    technologies: ["React", "TypeScript", "Gemini AI", "Tailwind CSS"],
    features: ["Tone Adjustment", "Flow Optimization", "Plagiarism Check", "Multiple Style Modes", "Real-time Refinement"],
    liveUrl: "https://human-text-three.vercel.app",
    githubUrl: "https://github.com/karalapatiphanicharan-cyber/HumanText",
    visual: {
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      emojis: ["✍️", "🤖", "✨"],
      color: "emerald",
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
