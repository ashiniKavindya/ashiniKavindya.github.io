export const profile = {
  name: "Ashini Kavindya Nawagamuwa",
  shortName: "Ashini Kavindya",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline:
    "Building intelligent systems at the intersection of deep learning, NLP, and full-stack engineering.",
  location: "Ruwanwella, Sri Lanka",
  email: "ashinik.23@cse.mrt.ac.lk",
  phone: "+94 755744879",
  linkedin: "https://linkedin.com/in/AshiniKavindya",
  github: "https://github.com/AshiniKavindya",
  linkedinLabel: "Ashini Kavindya",
  githubLabel: "AshiniKavindya",
  resumeFile: "/Ashini Kavindya.pdf",
  bio: "Computer Science undergraduate at the University of Moratuwa, specializing in machine learning, deep learning, and NLP. I build intelligent systems — from language tools to real-time gesture recognition.",
};

export const stats = [
  { label: "GPA", value: "3.36", suffix: "/4.00" },
  { label: "A/L Island Rank", value: "179", suffix: "/35,197" },
  { label: "Z-Score", value: "2.56", suffix: "+" },
  { label: "Projects Shipped", value: "6", suffix: "+" },
];

export const education = [
  {
    institution: "University of Moratuwa",
    degree: "B.Sc. Eng. (Honours) in Computer Science and Engineering — DSE Specialization",
    location: "Moratuwa, Sri Lanka",
    period: "Mar 2024 – Present",
    details: ["GPA: 3.36 / 4.00"],
  },
  {
    institution: "St. Joseph's Girls' College",
    degree: "High School",
    location: "Kegalle, Sri Lanka",
    period: "Jan 2023",
    details: [
      "GCE Advanced Level (2023): Z-Score +2.56, Island Rank 179 / 35,197",
      "Combined Mathematics (A), Chemistry (A), Physics (A)",
      "GCE Ordinary Level (2019): 8A 1B",
    ],
  },
];

export const skills = {
  "AI / Machine Learning": [
    "PyTorch",
    "Scikit-learn",
    "NLP",
    "1D-CNN",
    "MediaPipe",
    "Topic Modeling",
    "HDBSCAN",
    "Embeddings",
  ],
  "Data & Tools": ["Python", "NumPy", "Pandas", "SciPy", "OpenCV"],
  "Web Technologies": [
    "React (TypeScript)",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "TailwindCSS",
  ],
  "Languages & Systems": ["Python", "C++", "Java", "VHDL", "JavaScript", "HTML/CSS"],
};

export const projects = [
  {
    title: "grapheme++",
    period: "Jan 2026 – Present",
    description:
      "A text-processing library for accurate grapheme segmentation in Sinhala and Tamil.",
    tech: ["Python", "Unicode Text Processing", "Grapheme Segmentation", "NLP Metrics"],
    tag: "NLP",
    link: null,
  },
  {
    title: "Sinhala Air Writing Recognition (1D-CNN)",
    period: "Mar 2026 – Present",
    description:
      "A real-time system that turns finger-tracing gestures into Sinhala characters, running on edge devices.",
    tech: ["Python", "PyTorch", "MediaPipe", "NumPy", "SciPy", "OpenCV"],
    tag: "Deep Learning",
    link: null,
  },
  {
    title: "Medsync — Clinic Appointment & Treatment Management",
    period: "Nov 2025",
    description:
      "A full-stack app for managing clinic appointments and treatment records, with secure auth for medical data.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "TailwindCSS"],
    tag: "Full-Stack",
    link: null,
  },
  {
    title: "RPAL Interpreter",
    period: "Mar 2026 – Apr 2026",
    description:
      "A from-scratch RPAL language interpreter, verified against the official rpal.exe reference output.",
    tech: ["C++", "Recursive Descent Parsing", "Tree-Based Evaluation"],
    tag: "Systems",
    link: "https://github.com/ashiniKavindya/RPAL-Interpreter",
  },
  {
    title: "Sentiment Analysis System",
    period: "Dec 2025",
    description:
      "A sentiment analysis model classifying text as positive or negative, with an interactive web interface for real-time predictions.",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas", "NumPy", "HTML", "JavaScript"],
    tag: "Machine Learning",
    link: null,
  },
  {
    title: "Nano-Processor Simulation",
    period: "Apr 2025",
    description:
      "A 4-bit nanoprocessor with a custom instruction set, ALU, and control unit, designed in VHDL and verified through simulation and FPGA testing.",
    tech: ["VHDL", "Xilinx Vivado", "Assembly Language"],
    tag: "Hardware",
    link: null,
  },
];

export const publications = [
  {
    title: "Trilingual Topic Modeling of Sri Lankan Parliamentary Debates",
    venue: "Accepted at MERCon 2026 (Collaborative Research)",
    year: "2026",
    description:
      "An end-to-end topic modeling pipeline for Sri Lankan parliamentary debates, combining multilingual embeddings with clustering to surface themes across languages.",
  },
];

export const certifications = [
  { name: "Advanced Learning Algorithms", issuer: "Coursera", date: "Jan 2026" },
  { name: "Python for Data Science, AI and Development", issuer: "Coursera", date: "Jan 2026" },
  { name: "Developing AI Applications with Python and Flask", issuer: "Coursera", date: "Dec 2025" },
  { name: "Supervised Machine Learning: Regression and Classification", issuer: "Coursera", date: "Dec 2025" },
  { name: "Data Cleaning", issuer: "Kaggle", date: "Feb 2026" },
  { name: "Pandas", issuer: "Kaggle", date: "Jan 2026" },
  { name: "Intermediate Machine Learning", issuer: "Kaggle", date: "Dec 2025" },
  { name: "Intro to Machine Learning", issuer: "Kaggle", date: "Dec 2025" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
