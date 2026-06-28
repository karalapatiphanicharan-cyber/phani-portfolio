export interface Internship {
  title: string;
  organization: string;
  description: string;
  skills: string[];
}

export interface VirtualExperience {
  organization: string;
  title: string;
  description: string;
}

export interface Certification {
  name: string;
  organization: string;
  credentialUrl: string;
}

export interface Achievement {
  value: number;
  label: string;
  suffix?: string;
}

export const internship: Internship = {
  title: "Artificial Intelligence Intern",
  organization: "1Stop",
  description: "Completed an Artificial Intelligence internship focused on practical machine learning concepts, Python programming, data analysis, and real-world AI problem solving through hands-on projects.",
  skills: ["Python", "Machine Learning", "Data Analysis", "Problem Solving", "Artificial Intelligence"],
};

export const virtualExperiences: VirtualExperience[] = [
  {
    organization: "Tata",
    title: "Software Engineering Virtual Experience",
    description: "Completed industry-focused software engineering simulations covering real-world workflows, collaboration, and software development practices.",
  },
  {
    organization: "Deloitte",
    title: "Technology Consulting Virtual Experience",
    description: "Worked through technology consulting simulations involving business problem-solving, communication, and digital transformation scenarios.",
  },
  {
    organization: "Forage",
    title: "Professional Virtual Experience Programs",
    description: "Completed multiple professional job simulations to gain practical exposure to engineering, consulting, and industry workflows.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Introduction to AI & Machine Learning",
    organization: "Infosys",
    credentialUrl: "https://www.linkedin.com/in/phani-charan-7335283a5/details/certifications/",
  },
  {
    name: "SQL for Data Science",
    organization: "Coursera",
    credentialUrl: "https://www.linkedin.com/in/phani-charan-7335283a5/details/certifications/",
  },
  {
    name: "Prompt Engineering",
    organization: "Udemy",
    credentialUrl: "https://www.linkedin.com/in/phani-charan-7335283a5/details/certifications/",
  },
  {
    name: "Quantum Computing with IBM Qiskit",
    organization: "Udemy",
    credentialUrl: "https://www.linkedin.com/in/phani-charan-7335283a5/details/certifications/",
  },
];

export const achievements: Achievement[] = [
  {
    value: 170,
    label: "LeetCode Problems Solved",
    suffix: "+",
  },
  {
    value: 700,
    label: "GitHub Contributions",
    suffix: "+",
  },
  {
    value: 11,
    label: "Software Products Built",
    suffix: "+",
  },
  {
    value: 4,
    label: "Professional Certifications",
    suffix: "+",
  },
];
