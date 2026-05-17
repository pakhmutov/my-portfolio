'use client';

import { useEffect, useState } from 'react';
import styles from './Loader.module.scss';

export function Loader() {
    const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');

    useEffect(() => {
        const fadeTimer = setTimeout(() => setPhase('fading'), 1200);
        const removeTimer = setTimeout(() => setPhase('gone'), 1800);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (phase === 'gone') return null;

    return (
        <div className={`${styles.loader} ${phase === 'fading' ? styles.fading : ''}`}>
            <span className={styles.initials}>VP</span>
        </div>
    );
}
