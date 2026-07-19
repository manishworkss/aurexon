'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Hero.module.css';

const roles = [
  'Java Backend Developer',
  'AI Enthusiast',
  'Spring Boot Architect',
  'Problem Solver',
];

function TypeWriter() {
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRole];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRole]);

  return (
    <span className={styles.typedText}>
      {text}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

/* Wireframe Grid Graphic */
function WireframeGraphic() {
  return (
    <div className={styles.wireframeWrapper}>
      <div className={styles.gridBackground}></div>
      
      {/* Code Block (Top Left) */}
      <motion.div 
        className={`${styles.wireItem} ${styles.wireCode}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={styles.codeTag}>&lt;/&gt;</div>
        <div className={styles.codeLines}>
          <div className={styles.line} style={{ width: '40%' }}></div>
          <div className={styles.line} style={{ width: '80%' }}></div>
          <div className={styles.line} style={{ width: '60%' }}></div>
          <div className={styles.line} style={{ width: '50%' }}></div>
        </div>
        <div className={styles.codeTag}>/&gt;</div>
        <div className={styles.codeLines} style={{ marginTop: '0.5rem' }}>
          <div className={styles.line} style={{ width: '70%' }}></div>
          <div className={styles.line} style={{ width: '50%' }}></div>
        </div>
        <div className={styles.codeTag}>&lt;/&gt;</div>
      </motion.div>

      {/* UI Elements (Top Right) */}
      <motion.div 
        className={`${styles.wireItem} ${styles.wireUI}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -5 }}
      >
        <div className={styles.wireButton}>button</div>
        <div className={styles.wireInput}>input</div>
      </motion.div>

      {/* Isometric Cube (Center) */}
      <motion.div 
        className={`${styles.wireItem} ${styles.wireCube}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0L64 18.5V55.5L32 74L0 55.5V18.5L32 0Z" fill="#F0F0F0" stroke="#D0D0D0" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M32 37L64 18.5M32 37L0 18.5M32 37V74" stroke="#D0D0D0" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M32 0L0 18.5L32 37L64 18.5L32 0Z" fill="#E5E5E5" stroke="#D0D0D0" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M0 18.5V55.5L32 74V37L0 18.5Z" fill="#FAFAFA" stroke="#D0D0D0" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Card (Bottom Left) */}
      <motion.div 
        className={`${styles.wireItem} ${styles.wireCard}`}
        initial={{ opacity: 0, y: 20, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className={styles.cardImg}></div>
        <div className={styles.line} style={{ width: '90%', marginBottom: '8px' }}></div>
        <div className={styles.line} style={{ width: '60%', marginBottom: '16px' }}></div>
        <div className={styles.cardBtn}></div>
      </motion.div>

      {/* Tree Diagram (Bottom Right) */}
      <motion.div 
        className={`${styles.wireItem} ${styles.wireTree}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        whileHover={{ y: -5 }}
      >
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting Lines */}
          <path d="M50 20V40 M50 40H20 V50 M50 40H80 V50 M50 40V50" stroke="#D0D0D0" strokeWidth="2"/>
          {/* Nodes */}
          <rect x="38" y="0" width="24" height="20" fill="#E5E5E5" stroke="#D0D0D0" strokeWidth="2"/>
          <rect x="8" y="50" width="24" height="20" fill="#E5E5E5" stroke="#D0D0D0" strokeWidth="2"/>
          <rect x="38" y="50" width="24" height="20" fill="#E5E5E5" stroke="#D0D0D0" strokeWidth="2"/>
          <rect x="68" y="50" width="24" height="20" fill="#E5E5E5" stroke="#D0D0D0" strokeWidth="2"/>
        </svg>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className={styles.badgeDot}></span>
          Available for opportunities
        </motion.div>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Manish Kumar
        </motion.h1>

        <motion.div
          className={styles.roleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeWriter />
        </motion.div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          Building robust, scalable backend systems and intelligent AI
          solutions. Passionate about clean architecture, performance
          optimization, and shipping production-ready code.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button href="#projects" variant="primary">
            Explore Projects
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </div>

      <WireframeGraphic />

      {/* Background gradient blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </section>
  );
}
