import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.logo}>M.K.</span>
          <p className={styles.tagline}>Java Backend Developer & AI Enthusiast</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottom}>
          <p className={styles.text}>
            © {new Date().getFullYear()} Manish Kumar. All rights reserved.
          </p>
          <p className={styles.subtext}>
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
