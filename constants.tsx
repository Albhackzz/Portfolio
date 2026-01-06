
import { Project, Skill, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ship Cruise Management System (MCA Project)",
    description: "Developed a comprehensive web application for managing and booking cruise trips. Implemented a dynamic, real-time booking engine and secure user management using PHP for server-side logic and MySQL for efficient transaction records.",
    role: "Full-Stack Web Developer",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Albhackzz",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "E-commerce Mobile Application",
    description: "Coded a cross-platform (Android/iOS) e-commerce mobile application. Utilized Flutter for a high-performance UI and integrated Google Firebase for robust user authentication and a cloud-based, real-time product database.",
    role: "Mobile Application Developer",
    techStack: ["Flutter", "Firebase", "Dart"],
    githubUrl: "https://github.com/Albhackzz",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "AI & Image Analysis Tool",
    description: "Focused on core AI principles using Python and Java to build modular tools for data processing and basic computer vision tasks.",
    role: "Developer",
    techStack: ["Python", "Java", "C++"],
    githubUrl: "https://github.com/Albhackzz",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Designed and developed a modern, responsive portfolio using React and Framer Motion to showcase technical expertise and projects.",
    role: "Frontend Developer",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Albhackzz",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILLS: Skill[] = [
  { name: 'PHP', level: 90, category: 'Language' },
  { name: 'Java', level: 85, category: 'Language' },
  { name: 'Python', level: 80, category: 'Language' },
  { name: 'Dart/Flutter', level: 85, category: 'Mobile' },
  { name: 'HTML/CSS/JS', level: 95, category: 'Web' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Firebase', level: 80, category: 'Database' },
  { name: 'C / C++', level: 75, category: 'Language' }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 - 03/2026",
    title: "Master of Computer Applications (MCA)",
    institution: "Nirmala College, Muvattupuzha",
    description: "Focusing on Full-Stack Web and Mobile Application Development."
  },
  {
    year: "2021 - 03/2024",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "ST. JOSEPH'S ACADEMY OF HIGHER EDUCATION AND RESEARCH, Moolamattom",
    description: "Core computer application studies with a focus on programming fundamentals."
  },
  {
    year: "06/2019 - 03/2021",
    title: "Computer Science (Higher Secondary)",
    institution: "St. George's Higher Secondary School, Muthalakodam",
    description: "Foundational computer science concepts and early programming exposure."
  },
  {
    year: "2019",
    title: "High School Diploma (SSLC)",
    institution: "St. Mary's Higher Secondary School, Mankulam",
    description: "Completed secondary education with honors."
  }
];
