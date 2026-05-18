'use client';

import { useEffect, useRef } from 'react';

export function useFadeIn() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    el.addEventListener('animationend', () => {
                        el.classList.remove('fade-in', 'visible');
                        el.style.opacity = '1';
                    }, { once: true });
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
