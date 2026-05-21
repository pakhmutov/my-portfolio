import type { SiteData } from '@/types';

export const DATA: SiteData = {
    name: { first: 'Vladimir', last: 'Pakhmutov' },
    handle: 'vpakhmutov.vercel.app',
    role: 'Frontend Engineer',
    available: true,

    bio: [
        "Frontend developer with 4 years of experience. Currently at ICE Inc. (US). Based in Belgrade.",
        'I work primarily in React, Next.js, and TypeScript. I care about clean component architecture, maintainable code, and the details that make an interface feel right.',
        'Open to new opportunities — looking for a team that moves thoughtfully and cares about craftsmanship.',
    ],

    stack: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Tailwind', 'Node.js', 'Figma'],
    stackHighlight: ['React', 'Next.js', 'TypeScript'],

    skills: [
        { name: 'React', level: 'CORE' },
        { name: 'Next.js', level: 'CORE' },
        { name: 'TypeScript', level: 'DAILY' },
        { name: 'SCSS', level: 'DAILY' },
        { name: 'Node.js', level: 'SOLID' },
        { name: 'REST/GraphQL', level: 'SOLID' },
        { name: 'Figma', level: 'SOLID' },
        { name: 'Tailwind', level: 'SOLID' },
        { name: 'Testing', level: 'SOLID' },
    ],

    projects: [
        {
            num: '02',
            title: 'Crypto Dashboard',
            images: ['/projects/crypto-dashboard-1.png', '/projects/crypto-dashboard-2.png', '/projects/crypto-dashboard-3.png'],
            description: 'Personal crypto portfolio and market tracker. Candlestick charts via TradingView, live prices through Binance WebSocket, portfolio tracker with Zustand.',
            tags: ['Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'WebSocket', 'CoinGecko API', 'Vercel'],
            highlight: ['Next.js', 'TypeScript', 'Zustand'],
            github: 'https://github.com/pakhmutov/crypto-dashboard',
            live: 'https://crypto-dashboard-vp.vercel.app/',
        },
        {
            num: '01',
            title: 'Code Review Assistant',
            description: 'Paste a code snippet — get a structured AI review across bugs, improvements, security, and code style. Streamed response via Gemini 2.5 Flash with animated category status.',
            tags: ['Next.js', 'TypeScript', 'Gemini AI', 'SCSS', 'Vercel'],
            highlight: ['Next.js', 'TypeScript', 'Gemini AI'],
            images: ['/projects/code-review-assistant.png'],
            github: 'https://github.com/pakhmutov/code-review-assistant',
            live: 'https://code-review-assistant-vp.vercel.app/',
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
