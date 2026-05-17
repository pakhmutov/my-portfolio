'use client';

import { useEffect, useRef } from 'react';
import styles from './Particles.module.scss';

const COUNT = 120;
const SPEED = 0.6;
const MOUSE_RADIUS = 100;
const MOUSE_FORCE = 0.03;

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    opacity: number;
}

export function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -999, y: -999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let raf: number;
        let w = 0, h = 0;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const init = () => {
            particles = Array.from({ length: COUNT }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * SPEED,
                vy: (Math.random() - 0.5) * SPEED,
                r: Math.random() * 1.2 + 0.4,
                opacity: Math.random() * 0.3 + 0.08,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            for (const p of particles) {
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    p.vx -= dx * force * MOUSE_FORCE;
                    p.vy -= dy * force * MOUSE_FORCE;
                }

                // wander — случайное подруливание
                p.vx += (Math.random() - 0.5) * 0.04;
                p.vy += (Math.random() - 0.5) * 0.04;

                // ограничение скорости
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > SPEED * 2) {
                    p.vx = (p.vx / speed) * SPEED * 2;
                    p.vy = (p.vy / speed) * SPEED * 2;
                }
                if (speed < SPEED * 0.3) {
                    p.vx = (p.vx / speed) * SPEED * 0.3;
                    p.vy = (p.vy / speed) * SPEED * 0.3;
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(192, 132, 252, ${p.opacity})`;
                ctx.fill();
            }

            raf = requestAnimationFrame(draw);
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', () => { resize(); init(); });
        window.addEventListener('mousemove', onMouseMove);

        resize();
        init();
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', () => { resize(); init(); });
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
