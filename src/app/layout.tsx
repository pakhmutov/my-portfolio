import type { Metadata } from 'next';
import './globals.scss';
import { Cursor } from '@/components/Cursor/Cursor';
import { Loader } from '@/components/Loader/Loader';
import { Particles } from '@/components/Particles/Particles';

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
            <body>
                <Loader />
                <Cursor />
                <Particles />
                {children}
            </body>
        </html>
    );
}
