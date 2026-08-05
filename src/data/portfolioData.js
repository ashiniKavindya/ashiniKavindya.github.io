export const profile = {
  name: "Ashini Kavindya Nawagamuwa",
  shortName: "Ashini Kavindya",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline:
    "I build rough drafts of intelligence, then teach them to think on their own.",
  subtitle: "CSE undergraduate at University of Moratuwa, open to AI/ML opportunities.",
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
  { label: "GPA", value: "3.47", suffix: "/4.00" },
  { label: "A/L Island Rank", value: "179", suffix: "/35,197" },
  { label: "Z-Score", value: "2.56", suffix: "+" },
  { label: "Projects Shipped", value: "9", suffix: "+" },
];

export const education = [
  {
    institution: "University of Moratuwa",
    degree: "B.Sc. Eng. (Honours) in Computer Science and Engineering — DSE Specialization",
    location: "Moratuwa, Sri Lanka",
    period: "Mar 2024 – Present",
    details: ["GPA: 3.47 / 4.00"],
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
    "LangChain",
    "LangGraph",
    "Hugging Face",
    "Google Gemini API",
  ],
  "Data & Tools": ["Python", "NumPy", "Pandas", "SciPy", "OpenCV", "MongoDB", "FastAPI"],
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
    title: "grapheme-kit",
    period: "Jan 2026 – Jun 2026",
    description:
      "An open-source Python library for grapheme-aware text processing in Sinhala and Tamil, treating multi-codepoint clusters as single visual characters.",
    tech: ["Python", "Unicode Text Processing", "Grapheme Segmentation", "NLP Metrics"],
    tag: "NLP",
    link: "https://github.com/vmenan/grapheme-kit",
  },
  {
    title: "FleetSentin — Agentic Fuel Theft Detection",
    period: "Jun 2026",
    description:
      "A multi-agent system that triages fleet fuel telemetry and auto-files Jira tickets for suspected theft, gating LLM investigation behind a deterministic triage layer.",
    tech: ["Python", "LangGraph", "MCP", "MongoDB", "ThingsBoard", "MQTT", "Jira REST API"],
    tag: "Agentic AI",
    link: "https://github.com/ashiniKavindya/FleetSentin",
  },
  {
    title: "Bias-Aware Sinhala News Aggregation Platform",
    period: "Jul 2026 – Present",
    description:
      "A research platform clustering Sinhala news articles by real-world event across 10+ publishers, surfacing how outlets differ in coverage and framing.",
    tech: ["Python", "Hugging Face", "LASER3", "HDBSCAN", "Scikit-learn", "FastAPI", "PostgreSQL", "React"],
    tag: "Research",
    link: null,
  },
  {
    title: "Lyra",
    period: "Jun 2026 – Jul 2026",
    description:
      "A conversational assistant that reads facial expressions in real time and adapts its responses, pairing a FACS-grounded emotion pipeline with a Gemini-powered chat agent.",
    tech: ["Python", "MediaPipe", "LangChain", "Google Gemini API", "TypeScript", "React", "Express.js", "SQLite"],
    tag: "Conversational AI",
    link: "https://github.com/ashiniKavindya/Lyra",
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
    link: "https://github.com/KRakeesh04/Project-MedSync",
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
    title: "grapheme-kit: Grapheme Level Metrics and Text Processing for Multilingual NLP",
    venue: "arXiv preprint, cs.CL — Nisfer, Kavindya, Atukorala, P. Velayuthan, M. Velayuthan",
    year: "Jul 2026",
    description:
      "Extends lexical distance, similarity, and evaluation metrics to operate on grapheme clusters rather than Unicode code points, with an OCR case study showing grapheme-level metrics evaluate complex scripts more faithfully than code-point metrics.",
    link: "https://arxiv.org/abs/2607.22456",
  },
  {
    title: "Trilingual Topic Modeling of Sri Lankan Parliamentary Debates",
    venue: "Accepted at MERCon 2026 (Collaborative Research)",
    year: "2026",
    description:
      "An end-to-end topic modeling pipeline for Sri Lankan parliamentary debates, combining multilingual embeddings with clustering to surface themes across languages.",
    link: null,
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
