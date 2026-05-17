import type { SiteData } from '@/types';

export const DATA: SiteData = {
    name: { first: 'John', last: 'Doe' },
    handle: 'jd.dev',
    role: 'Frontend Engineer',
    available: true,

    bio: [
        "I'm a frontend developer with 3 years of experience building production web applications. I care about code quality, performance, and the details that make an interface feel right.",
        'Comfortable across the stack — from designing component APIs in React to writing REST endpoints in Node. I know the difference between code that works and code that scales.',
        'Currently looking for a team that cares about craftsmanship and moves thoughtfully.',
    ],

    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Figma'],
    stackHighlight: ['React', 'Next.js', 'TypeScript'],

    skills: [
        { name: 'React', level: 'CORE' },
        { name: 'Next.js', level: 'CORE' },
        { name: 'TypeScript', level: 'DAILY' },
        { name: 'Node.js', level: 'DAILY' },
        { name: 'REST/GraphQL', level: 'SOLID' },
        { name: 'Tailwind', level: 'SOLID' },
        { name: 'Testing', level: 'LEARNING' },
        { name: 'Figma', level: 'SOLID' },
    ],

    projects: [
        {
            num: '001',
            title: 'Project Alpha',
            description:
                'A dashboard for monitoring real-time data pipelines. Built a custom charting layer on top of D3 to handle 10k+ data points without jank. Reduced load time by 60% via route-level code splitting.',
            tags: ['Next.js', 'TypeScript', 'D3', 'REST API', 'Vercel'],
            highlight: ['Next.js', 'TypeScript'],
            github: 'https://github.com/johndoe/alpha',
            live: 'https://alpha.johndoe.dev',
        },
        {
            num: '002',
            title: 'Project Beta',
            description:
                'Full-stack SaaS starter with auth, billing, and team management. Designed a component system from scratch — zero UI library dependency. Used by 3 side projects as a base.',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
            highlight: ['React', 'Node.js'],
            github: 'https://github.com/johndoe/beta',
            live: null,
        },
        {
            num: '003',
            title: 'Project Gamma',
            description:
                'CLI tool for scaffolding React component trees from a JSON schema. Saves ~20 minutes per feature. Published to npm, 200+ downloads.',
            tags: ['TypeScript', 'Node.js', 'npm'],
            highlight: ['TypeScript'],
            github: 'https://github.com/johndoe/gamma',
            live: null,
        },
    ],

    posts: [
        {
            date: '2024.11',
            title: 'Why I stopped using useEffect for data fetching',
            tag: 'REACT',
            href: '/writing/useeffect-data-fetching',
        },
        {
            date: '2024.09',
            title: 'TypeScript patterns I actually use at work',
            tag: 'TS',
            href: '/writing/typescript-patterns',
        },
        {
            date: '2024.07',
            title: 'Building a component library without burning out',
            tag: 'DX',
            href: '/writing/component-library',
        },
    ],

    contacts: [
        { platform: 'EMAIL', value: 'john@example.com', href: 'mailto:john@example.com' },
        { platform: 'GITHUB', value: 'github.com/johndoe', href: 'https://github.com/johndoe' },
        {
            platform: 'LINKEDIN',
            value: 'linkedin.com/in/johndoe',
            href: 'https://linkedin.com/in/johndoe',
        },
        { platform: 'TELEGRAM', value: '@johndoe', href: 'https://t.me/johndoe' },
    ],
};
