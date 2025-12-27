export interface Page {
    id: string;
    title: string;
    content: string;
    emoji: string;
    isFavorite?: boolean;
    coverUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Song {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    previewUrl: string;
}

export interface LofiStream {
    name: string;
    emoji: string;
    gradient: string;
    url: string;
}

// Portfolio Types
export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    summary: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
}

export interface ProjectHighlight {
    label?: string;
    text: string;
}

export interface Project {
    id: number;
    title: string;
    tech: string;
    featured: boolean;
    youtubeId?: string;
    image?: string;
    highlights: (string | ProjectHighlight)[];
    links: {
        live?: string;
        github?: string;
        linkedin?: string;
        view?: string;
    };
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
    location: string;
}

export interface ResumeConfig {
    driveFileId: string;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    experience: Experience[];
    projects: Project[];
    skills: SkillCategory[];
    education: Education;
    resumeConfig: ResumeConfig;
}
