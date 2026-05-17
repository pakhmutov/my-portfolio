'use client';

import { useEffect, useRef } from 'react';
import styles from './Cursor.module.scss';

export function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: -100, y: -100 });
    const ring = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', onMove);

        let raf: number;
        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
            }
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className={styles.dot} />
            <div ref={ringRef} className={styles.ring} />
        </>
    );
}
