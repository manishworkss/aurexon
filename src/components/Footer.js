import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Manish Kumar. All rights reserved.
        </p>
        <p className={styles.subtext}>
          Java Backend Developer & AI Enthusiast
        </p>
      </div>
    </footer>
  );
}
