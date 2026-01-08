
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'ML/AI' | 'Frontend' | 'Tools';
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
