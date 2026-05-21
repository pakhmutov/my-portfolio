export interface Project {
    num: string;
    title: string;
    description: string;
    tags: string[];
    highlight: string[];
    github: string | null;
    live: string | null;
    images?: string[];
}

export interface Post {
    date: string;
    title: string;
    tag: string;
    href: string;
}

export interface ContactItem {
    platform: string;
    value: string;
    href: string;
}

export interface SkillItem {
    name: string;
    level: 'CORE' | 'DAILY' | 'SOLID' | 'LEARNING';
}

export interface SiteData {
    name: { first: string; last: string };
    handle: string;
    role: string;
    available: boolean;
    bio: string[];
    stack: string[];
    stackHighlight: string[];
    skills: SkillItem[];
    projects: Project[];
    posts: Post[];
    contacts: ContactItem[];
}
