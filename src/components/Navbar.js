'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function LeetcodeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.2a1.374 1.374 0 0 0-.416.973v1.545c0 .365.145.714.405.973l.01.01a1.374 1.374 0 0 0 1.944 0l5.35-5.326a1.374 1.374 0 0 0 0-1.944L13.483 0zM5.38 8.136a1.374 1.374 0 0 0-.973.405L.405 12.543a1.374 1.374 0 0 0 0 1.944l4.002 4.002a1.374 1.374 0 0 0 1.944 0l3.992-3.992a1.374 1.374 0 0 0 0-1.944l-4.002-4.002a1.374 1.374 0 0 0-.961-.415zm13.24 0a1.374 1.374 0 0 0-.973.405l-4.002 4.002a1.374 1.374 0 0 0 0 1.944l3.992 3.992a1.374 1.374 0 0 0 1.944 0l4.002-4.002a1.374 1.374 0 0 0 0-1.944l-4.002-4.002a1.374 1.374 0 0 0-.961-.415z"/>
    </svg>
  );
}

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <motion.div
        className={styles.pillNavbar}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Brand Logo */}
        <Link href="#hero" className={styles.brandLogo}>
          AUREXON
        </Link>

        {/* Center: Nav links */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Social & Contact Action */}
        <div className={styles.rightActions}>
          <div className={styles.socials}>
            <a href="https://github.com/manishworkss/aurexon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href="https://www.linkedin.com/company/aurexon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </div>

          <a
            href="#contact"
            className={styles.resumeBtn}
          >
            Get in Touch
          </a>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.nav
          className={styles.mobileDropdown}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
