
import React, { useState } from 'react';
import SectionHeader from './components/SectionHeader';
import AIChatAssistant from './components/AIChatAssistant';
import { Project, Skill, Experience } from './types';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills: Skill[] = [
    { name: 'Python', category: 'Language', icon: 'fab fa-python' },
    { name: 'C++', category: 'Language', icon: 'fas fa-code' },
    { name: 'Scikit-Learn', category: 'ML/AI', icon: 'fas fa-brain' },
    { name: 'TensorFlow', category: 'ML/AI', icon: 'fas fa-network-wired' },
    { name: 'PyTorch', category: 'ML/AI', icon: 'fas fa-fire' },
    { name: 'React', category: 'Frontend', icon: 'fab fa-react' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'fas fa-wind' },
    { name: 'Git/GitHub', category: 'Tools', icon: 'fab fa-github' },
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'MNIST Digit Recognition',
      description: 'A Deep Learning model using CNN architecture that recognizes handwritten digits with 99.2% accuracy.',
      techStack: ['Python', 'PyTorch', 'NumPy'],
      imageUrl: 'https://picsum.photos/seed/mnist/600/400',
      githubUrl: '#'
    },
    {
      id: '2',
      title: 'Emotion-Sense NLP',
      description: 'A sentiment analysis tool built on top of DistilBERT to classify customer feedback into multiple emotional states.',
      techStack: ['Python', 'HuggingFace', 'FastAPI'],
      imageUrl: 'https://picsum.photos/seed/nlp/600/400',
      githubUrl: '#'
    },
    {
      id: '3',
      title: 'Algorithmic Trading Bot',
      description: 'A paper-trading bot using technical indicators and basic reinforcement learning to predict stock movements.',
      techStack: ['Python', 'Pandas', 'Backtrader'],
      imageUrl: 'https://picsum.photos/seed/trading/600/400',
      githubUrl: '#'
    }
  ];

  const experiences: Experience[] = [
    {
      company: 'Tech University AI Lab',
      role: 'Research Assistant',
      period: 'Jan 2024 - Present',
      description: [
        'Assisting senior researchers in preprocessing large medical datasets.',
        'Implementing data augmentation techniques to improve model robustness.',
        'Documenting experimental results using LaTeX and Weights & Biases.'
      ]
    },
    {
      company: 'Open Source Community',
      role: 'Contributor',
      period: '2023 - Present',
      description: [
        'Contributed several bug fixes to popular Python libraries.',
        'Mentored 1st-year students in Python programming basics.',
        'Active member of the university coding club.'
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-indigo-500 font-mono">&lt;</span>
            Alex<span className="text-indigo-500">.</span>Chen
            <span className="text-indigo-500 font-mono">/&gt;</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all">Get in Touch</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-2">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-2">Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-2">Projects</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-2">Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-indigo-600 text-white px-5 py-3 rounded-xl text-center">Get in Touch</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:pt-48 md:pb-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold border border-indigo-500/20 mb-6">
              2nd Year Computer Science Engineering
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Designing the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Machine Learning</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Hey! I'm Alex. I specialize in building intelligent systems and solving complex problems using data. Currently exploring the intersection of Computer Vision and Large Language Models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                View My Work <i className="fas fa-arrow-right"></i>
              </a>
              <div className="flex gap-4 justify-center md:justify-start pt-2 sm:pt-0 items-center px-4">
                <a href="#" className="text-2xl text-slate-400 hover:text-white transition-colors"><i className="fab fa-github"></i></a>
                <a href="#" className="text-2xl text-slate-400 hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="text-2xl text-slate-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 animate-pulse opacity-20"></div>
              <div className="absolute inset-0 bg-cyan-600 rounded-3xl -rotate-6 opacity-20"></div>
              <img 
                src="https://picsum.photos/seed/alexprofile/400/400" 
                alt="Alex Chen" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-slate-700 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 z-20 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Availability</div>
                  <div className="text-sm font-bold text-white">Open to Internships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="About Me" subtitle="A bit about my journey and why I love what I do." />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                My fascination with technology started with a simple "Hello World" in Python. Today, that curiosity has evolved into a deep passion for Machine Learning and Artificial Intelligence.
              </p>
              <p>
                Being in my 2nd year of CS Engineering, I'm constantly learning new concepts—from core Data Structures and Algorithms to advanced Neural Network architectures. I believe that AI is the most powerful tool we have to solve the world's most pressing challenges.
              </p>
              <p>
                When I'm not coding or reading research papers, you'll find me at local hackathons, participating in Kaggle competitions, or exploring the outdoors.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-400">2+</div>
                  <div className="text-sm text-slate-400">Years Coding</div>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-slate-400">Projects Built</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <i className="fas fa-terminal text-8xl text-indigo-500"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-graduation-cap text-indigo-500"></i> Education
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-indigo-500/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <div>
                    <h4 className="font-bold text-white">B.Tech in Computer Science Engineering</h4>
                    <p className="text-indigo-400 text-sm">Tech University • 2022 - 2026</p>
                    <p className="text-slate-400 text-sm mt-2">Current CGPA: 9.2/10.0</p>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-indigo-500/30">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-700"></div>
                  <div>
                    <h4 className="font-bold text-white">High School (Science)</h4>
                    <p className="text-slate-500 text-sm">St. Mary's Academy • 2020 - 2022</p>
                    <p className="text-slate-400 text-sm mt-2">Grade: 95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Technical Arsenal" subtitle="The tools and technologies I use to bring ideas to life." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl text-indigo-400 mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <i className={skill.icon}></i>
                </div>
                <h4 className="font-bold text-white mb-1">{skill.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured Projects" subtitle="A selection of my recent works in Machine Learning and Web Development." />
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-indigo-300 px-2 py-1 rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a href={project.githubUrl} className="text-slate-300 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                      <i className="fab fa-github"></i> Code
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-sm font-medium transition-colors">
                        <i className="fas fa-external-link-alt"></i> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold">
              View All Projects on GitHub <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Experience" subtitle="My professional and community contributions." />
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-indigo-500/20">
                <div className="absolute left-[-10px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 h-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex gap-3">
                      <span className="text-indigo-500 mt-1"><i className="fas fa-caret-right"></i></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1">
              <h2 className="text-3xl font-bold text-white mb-6">Let's build something amazing together</h2>
              <p className="text-slate-400 mb-10">
                I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</div>
                    <a href="mailto:alex.chen@example.com" className="text-white font-medium hover:text-indigo-400 transition-colors">alex.chen@example.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</div>
                    <div className="text-white font-medium">Silicon Valley, CA (Open to Remote)</div>
                  </div>
                </div>
              </div>
            </div>
            <form className="p-10 md:p-16 bg-slate-800/50 flex-1 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Hiring for Internship" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none" placeholder="Hello Alex..."></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-2 font-bold text-white">
             <span className="text-indigo-500 font-mono">&lt;</span>
            Alex<span className="text-indigo-500">.</span>Chen
            <span className="text-indigo-500 font-mono">/&gt;</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Alex Chen. Built with React & Gemini.</p>
            <p className="text-[10px] mt-1 text-slate-600">All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
