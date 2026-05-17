'use client';

import Link from 'next/link';
import { DATA } from '@/data/portfolio';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './Writing.module.scss';

export function Writing() {
    const ref = useFadeIn();

    return (
        <section id="writing" className="section">
            <div className="container">
                <p className="section-label">03 / WRITING</p>
                <h2 className="section-heading">
                    Thoughts &amp;
                    <br />
                    <em>notes</em>
                </h2>
                <div ref={ref} className="fade-in">
                    {DATA.posts.map((post, i) => (
                        <Link key={i} href={post.href} className={styles.row}>
                            <span className={styles.date}>{post.date}</span>
                            <span className={styles.title}>{post.title}</span>
                            <span className={styles.tag}>{post.tag}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
