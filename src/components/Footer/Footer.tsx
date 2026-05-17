import { DATA } from '@/data/portfolio';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <span className={styles.copy}>
                    © {new Date().getFullYear()} {DATA.name.first} {DATA.name.last}
                </span>
                <span className={styles.made}>
                    built with <span className={styles.accent}>Next.js</span> · deployed on Vercel
                </span>
            </div>
        </footer>
    );
}
