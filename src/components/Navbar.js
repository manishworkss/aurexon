'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          M.K.
        </Link>
        <nav className={styles.navLinks}>
          <Link href="#about" className={styles.link}>About</Link>
          <Link href="#projects" className={styles.link}>Projects</Link>
          <Link href="#experience" className={styles.link}>Experience</Link>
        </nav>
        <div className={styles.socials}>
          <a href="https://github.com/manishworkss" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/manish-kumar" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
