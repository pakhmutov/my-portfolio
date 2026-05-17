'use client';

import { useState, useEffect } from 'react';
import { DATA } from '@/data/portfolio';
import styles from './Hero.module.scss';

export function Hero() {
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const t = setInterval(() => setBlink((b) => !b), 500);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.grid} aria-hidden="true" />
            <div className="container">
                <p className={styles.tag}>
                    {DATA.role.toUpperCase()} ·{' '}
                    {DATA.available ? 'AVAILABLE FOR HIRE' : 'NOT AVAILABLE'}
                </p>

                <h1 className={styles.heading}>
                    {DATA.name.first}
                    <br />
                    <em>{DATA.name.last}</em>
                    <span
                        className={styles.cursor}
                        style={{ opacity: blink ? 1 : 0 }}
                        aria-hidden="true"
                    />
                </h1>

                <p className={styles.sub}>
                    I build <strong>fast, accessible, well-architected</strong> web interfaces.
                    Focused on React, Next.js and TypeScript — with a taste for clean APIs and great
                    UX.
                </p>

                <div className={styles.actions}>
                    <a href="#projects" className={styles.btnPrimary}>
                        View projects →
                    </a>
                    <a href="#contact" className={styles.btnGhost}>
                        Get in touch
                    </a>
                </div>

                <div className={styles.stack}>
                    {DATA.stack.map((s) => (
                        <span
                            key={s}
                            className={
                                DATA.stackHighlight.includes(s)
                                    ? styles.stackActive
                                    : styles.stackItem
                            }
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
