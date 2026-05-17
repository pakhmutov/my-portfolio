import type { SiteData } from '@/types';

export const DATA: SiteData = {
    name: { first: 'Vladimir', last: 'Pakhmutov' },
    handle: 'vpakhmutov.dev',
    role: 'Frontend Engineer',
    available: true,

    bio: [
        "Frontend developer with 4 years of experience. Currently at ICE Inc. (US), previously at Komanda F5. Based in Belgrade.",
        'I work primarily in React, Next.js, and TypeScript. I care about clean component architecture, maintainable code, and the details that make an interface feel right.',
        'Open to new opportunities — looking for a team that moves thoughtfully and cares about craftsmanship.',
    ],

    stack: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Node.js', 'Figma'],
    stackHighlight: ['React', 'Next.js', 'TypeScript'],

    skills: [
        { name: 'React', level: 'CORE' },
        { name: 'Next.js', level: 'CORE' },
        { name: 'TypeScript', level: 'DAILY' },
        { name: 'SCSS', level: 'DAILY' },
        { name: 'Node.js', level: 'SOLID' },
        { name: 'REST/GraphQL', level: 'SOLID' },
        { name: 'Figma', level: 'SOLID' },
        { name: 'Testing', level: 'LEARNING' },
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

    posts: [],

    contacts: [
        { platform: 'EMAIL', value: 'vladimir.pakhmutoff@gmail.com', href: 'mailto:vladimir.pakhmutoff@gmail.com' },
        { platform: 'GITHUB', value: 'github.com/pakhmutov', href: 'https://github.com/pakhmutov' },
        {
            platform: 'LINKEDIN',
            value: 'linkedin.com/in/vladimir-pakhmutov',
            href: 'https://www.linkedin.com/in/vladimir-pakhmutov/',
        },
        { platform: 'TELEGRAM', value: '@ryrrary', href: 'https://t.me/ryrrary' },
    ],
};
