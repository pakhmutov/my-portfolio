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
            num: '02',
            title: 'Crypto Dashboard',
            description: 'Personal crypto portfolio and market tracker. Features a top-50 market table, candlestick charts with period selector (1W / 1M / 3M / 1Y) powered by TradingView Lightweight Charts, and a portfolio tracker with localStorage persistence.',
            tags: ['Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'CoinGecko API', 'Vercel'],
            highlight: ['Next.js', 'TypeScript', 'Zustand'],
            github: 'https://github.com/pakhmutov/crypto-dashboard',
            live: 'https://crypto-dashboard-vp.vercel.app/',
        },
        {
            num: '01',
            title: 'Code Review Assistant',
            description: 'Web app that takes a code snippet and returns a structured AI-powered review across four categories: bugs, improvements, security, and code style. Built with Next.js App Router and Gemini 2.5 Flash, streamed response with animated category status.',
            tags: ['Next.js', 'TypeScript', 'Gemini AI', 'SCSS', 'Vercel'],
            highlight: ['Next.js', 'TypeScript', 'Gemini AI'],
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
