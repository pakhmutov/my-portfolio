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

    projects: [],

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
