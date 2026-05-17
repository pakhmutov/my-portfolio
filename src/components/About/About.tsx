'use client';

import { DATA } from '@/data/portfolio';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './About.module.scss';

export function About() {
    const ref = useFadeIn();

    return (
        <section id="about" className="section">
            <div className="container">
                <p className="section-label">01 / ABOUT</p>
                <div ref={ref} className={`fade-in ${styles.grid}`}>
                    <div>
                        <h2 className="section-heading">
                            A bit
                            <br />
                            <em>about me</em>
                        </h2>
                        {DATA.bio.map((p, i) => (
                            <p key={i} className={styles.bio}>
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className={styles.skills}>
                        {DATA.skills.map((s) => (
                            <div key={s.name} className={styles.skillRow}>
                                <span className={styles.skillName}>{s.name}</span>
                                <span className={styles.skillLevel}>{s.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
