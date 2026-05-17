'use client';

import { useState } from 'react';
import type { Project } from '@/types';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './Projects.module.scss';

interface Props {
    project: Project;
}

export function ProjectCard({ project }: Props) {
    const ref = useFadeIn();
    const [hovered, setHovered] = useState(false);

    return (
        <div
            ref={ref}
            className={`fade-in ${styles.card} ${hovered ? styles.cardHovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`${styles.accent} ${hovered ? styles.accentVisible : ''}`} />

            <div className={styles.cardBody}>
                <p className={styles.num}>{project.num}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className={`${styles.tag} ${project.highlight.includes(t) ? styles.tagHighlight : ''}`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.links}>
                {project.github && (
                    <a
                        href={project.github}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon /> Code
                    </a>
                )}
                {project.live && (
                    <a
                        href={project.live}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ↗ Live
                    </a>
                )}
            </div>
        </div>
    );
}

function GitHubIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );
}
