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

/* Interactive grid items */
function GridGraphic() {
  return (
    <div className={styles.gridContainer}>
      {/* Code snippet card */}
      <motion.div
        className={`${styles.gridItem} ${styles.codeCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      >
        <div className={styles.cardLabel}>&lt;/&gt;</div>
        <pre className={styles.miniCode}>
          <span className={styles.kw}>@Service</span>{'\n'}
          <span className={styles.kw}>public class</span>{' '}
          <span className={styles.cls}>AIEngine</span> {'{\n'}
          {'  '}<span className={styles.mt}>analyze</span>(data);{'\n'}
          {'}'}
        </pre>
      </motion.div>

      {/* API endpoint card */}
      <motion.div
        className={`${styles.gridItem} ${styles.apiCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      >
        <div className={styles.apiMethod}>GET</div>
        <div className={styles.apiPath}>/api/v1/predict</div>
      </motion.div>

      {/* Stats card */}
      <motion.div
        className={`${styles.gridItem} ${styles.statsCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      >
        <div className={styles.statNumber}>200+</div>
        <div className={styles.statLabel}>DSA Problems</div>
      </motion.div>

      {/* Architecture card */}
      <motion.div
        className={`${styles.gridItem} ${styles.archCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.95 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      >
        <div className={styles.archDiagram}>
          <div className={styles.archNode}>Client</div>
          <div className={styles.archArrow}>→</div>
          <div className={styles.archNode}>API</div>
          <div className={styles.archArrow}>→</div>
          <div className={styles.archNode}>AI</div>
        </div>
      </motion.div>

      {/* Tech stack pills */}
      <motion.div
        className={`${styles.gridItem} ${styles.techCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      >
        <span className={styles.techPill}>Java</span>
        <span className={styles.techPill}>Spring Boot</span>
        <span className={styles.techPill}>AI/ML</span>
      </motion.div>

      {/* Terminal card */}
      <motion.div
        className={`${styles.gridItem} ${styles.terminalCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.25 }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      >
        <div className={styles.terminalHeader}>
          <span className={styles.termDot} style={{ background: '#ff5f57' }}></span>
          <span className={styles.termDot} style={{ background: '#febc2e' }}></span>
          <span className={styles.termDot} style={{ background: '#28c840' }}></span>
        </div>
        <div className={styles.terminalBody}>
          <span className={styles.termPrompt}>$</span> mvn spring-boot:run
        </div>
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

      <GridGraphic />

      {/* Background gradient blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </section>
  );
}
