import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Vladimir Pakhmutov - Frontend Engineer',
    description:
        'Frontend developer specializing in React, Next.js, and TypeScript. Passionate about building performant and user-friendly web applications.',
    openGraph: {
        title: 'Vladimir Pakhmutov - Frontend Engineer',
        description:
            'Frontend developer specializing in React, Next.js, and TypeScript. Passionate about building performant and user-friendly web applications.',
        url: 'https://vladimirpakhmutov.dev',
        siteName: 'vpakhmutov.dev',
        locale: 'en-US',
        type: 'website',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
