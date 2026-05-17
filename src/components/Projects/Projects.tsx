'use client';

import { DATA } from '@/data/portfolio';
import { ProjectCard } from './ProjectCard';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './Projects.module.scss';

export function Projects() {
    const ref = useFadeIn();

    return (
        <section id="projects" className="section">
            <div className="container">
                <p className="section-label">02 / PROJECTS</p>
                <h2 ref={ref} className="section-heading fade-in">
                    Selected
                    <br />
                    <em>work</em>
                </h2>
                <div className={styles.list}>
                    {DATA.projects.length > 0 ? (
                        DATA.projects.map((p) => (
                            <ProjectCard key={p.num} project={p} />
                        ))
                    ) : (
                        <p className={styles.soon}>Coming soon.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
