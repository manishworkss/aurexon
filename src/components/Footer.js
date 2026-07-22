'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
    </svg>
  );
}

function LeetcodeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.2a1.374 1.374 0 0 0-.416.973v1.545c0 .365.145.714.405.973l.01.01a1.374 1.374 0 0 0 1.944 0l5.35-5.326a1.374 1.374 0 0 0 0-1.944L13.483 0zM5.38 8.136a1.374 1.374 0 0 0-.973.405L.405 12.543a1.374 1.374 0 0 0 0 1.944l4.002 4.002a1.374 1.374 0 0 0 1.944 0l3.992-3.992a1.374 1.374 0 0 0 0-1.944l-4.002-4.002a1.374 1.374 0 0 0-.961-.415zm13.24 0a1.374 1.374 0 0 0-.973.405l-4.002 4.002a1.374 1.374 0 0 0 0 1.944l3.992 3.992a1.374 1.374 0 0 0 1.944 0l4.002-4.002a1.374 1.374 0 0 0 0-1.944l-4.002-4.002a1.374 1.374 0 0 0-.961-.415z"/>
    </svg>
  );
}

function MailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowUpIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        {/* Top Header Row */}
        <div className={styles.topRow}>
          <div className={styles.brandInfo}>
            <span className={styles.logo}>MANISH KUMAR</span>
            <p className={styles.tagline}>Java Backend Developer & AI Enthusiast</p>
          </div>

          <nav className={styles.navLinks}>
            <Link href="#hero" className={styles.navLink}>Home</Link>
            <Link href="#education" className={styles.navLink}>Education</Link>
            <Link href="#experience" className={styles.navLink}>Experience</Link>
            <Link href="#projects" className={styles.navLink}>Projects</Link>
            <Link href="#contact" className={styles.navLink}>Contact</Link>
          </nav>
        </div>

        {/* Middle Social Bar */}
        <div className={styles.middleRow}>
          <div className={styles.socials}>
            <a href="https://github.com/manishworkss" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/manish-kumar-37349633a/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://leetcode.com/u/Manishkr92/" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="LeetCode">
              <LeetcodeIcon size={18} />
            </a>
            <a href="mailto:bcawithmanish0008@gmail.com" className={styles.socialCircle} aria-label="Gmail">
              <MailIcon size={18} />
            </a>
            <a href="tel:+918271735190" className={styles.socialCircle} aria-label="Phone">
              <PhoneIcon size={18} />
            </a>
          </div>

          <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUpIcon size={15} />
          </button>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Credits Row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyText}>
            © {new Date().getFullYear()} Manish Kumar. All rights reserved.
          </p>
          <p className={styles.builtText}>
            Designed, Built & Deployed Solo by Manish Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
