'use client';

import { useState } from 'react';
import type { ContactItem } from '@/types';
import styles from './Contact.module.scss';

export function ContactLink({ platform, value, href }: ContactItem) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`${styles.link} ${hovered ? styles.linkHovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.left}>
                <span className={styles.platform}>{platform}</span>
                <span className={styles.value}>{value}</span>
            </div>
            <span className={`${styles.arrow} ${hovered ? styles.arrowHovered : ''}`}>→</span>
        </a>
    );
}
