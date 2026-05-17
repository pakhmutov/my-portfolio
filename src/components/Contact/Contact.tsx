'use client';

import { DATA } from '@/data/portfolio';
import { ContactLink } from './ContactLink';
import { useFadeIn } from '@/hooks/useFadeIn';
import styles from './Contact.module.scss';

export function Contact() {
    const ref = useFadeIn();

    return (
        <section id="contact" className="section">
            <div className="container">
                <p className="section-label">04 / CONTACT</p>
                <div ref={ref} className={`fade-in ${styles.inner}`}>
                    <h2 className="section-heading">
                        Let's
                        <br />
                        <em>talk</em>
                    </h2>
                    <p className={styles.lead}>
                        Open to full-time roles and interesting contract work.
                        <br />
                        Best reached by email — I reply within 24 hours.
                    </p>
                    <div className={styles.links}>
                        {DATA.contacts.map((c) => (
                            <ContactLink key={c.platform} {...c} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
