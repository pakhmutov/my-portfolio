'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DATA } from '@/data/portfolio';
import styles from './Nav.module.scss';

const LINKS = ['about', 'projects', 'writing', 'contact'] as const;

export function Nav() {
    const [active, setActive] = useState('hero');

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        const handler = () => {
            let current = 'hero';
            sections.forEach((s) => {
                if (window.scrollY >= s.offsetTop - 80) current = s.id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const [handle, ext] = DATA.handle.split('.');

    return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                <Link href="#hero" className={styles.logo}>
                    {handle}
                    <span>.{ext}</span>
                </Link>
                <ul className={styles.links}>
                    {LINKS.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={active === id ? styles.linkActive : styles.link}
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
