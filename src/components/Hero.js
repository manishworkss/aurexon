'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function SparklesIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

const leftSkills = ['Java 21', 'Spring Boot', 'Python', 'AI Agents', 'Groq Llama-3.3', 'React.js', 'REST APIs', 'Node.js', 'MongoDB', 'MySQL'];
const rightSkills = ['RAG & Embeddings', 'NLP Assistant', 'FastAPI', 'Git & GitHub', 'Postman', 'Firebase', 'LeetCode 200+'];

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroGrid}>
        
        {/* Top Left Quadrant - Dark Forest Green Bio */}
        <motion.div 
          className={styles.topLeftBlock}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bioContent}>
            {/* AI Status Badge */}
            <motion.div
              className={styles.aiStatusBadge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className={styles.aiDot}></span>
              <SparklesIcon size={13} />
              <span>AI Systems & LLM Integrations Active</span>
            </motion.div>

            <motion.h1 
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              HEY, I&apos;M MANISH
            </motion.h1>

            <motion.p 
              className={styles.subtext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Backend Developer & AI Enthusiast specializing in Java, Spring Boot, REST APIs, and LLM reasoning workflows. Building production-ready applications, scalable architectures, and intelligent AI agents.
            </motion.p>

            <motion.div 
              className={styles.resumeNoteBox}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>📄 Want the full story? </span>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.resumeLink}
              >
                Just visit my resume to check →
              </a>
            </motion.div>

            <motion.div 
              className={styles.actionWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a href="#contact" className={styles.contactBtn}>
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Top Right Quadrant - Warm Sand with Floating Triangles */}
        <motion.div 
          className={styles.topRightBlock}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Floating Triangles */}
          <motion.div 
            className={`${styles.triangle} ${styles.tri1}`}
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />
          <motion.div 
            className={`${styles.triangle} ${styles.tri2}`}
            animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div 
            className={`${styles.triangle} ${styles.tri3}`}
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>

        {/* Center Portrait Card Container */}
        <motion.div 
          className={styles.centerPortraitCard}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.025, rotate: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.portraitWrapper}>
            <Image
              src="/profile-natural.png"
              alt="Manish Kumar"
              width={480}
              height={560}
              priority
              className={styles.portraitImage}
            />
          </div>
        </motion.div>

        {/* Bottom Left Quadrant - Dark Olive Green Skills */}
        <motion.div 
          className={styles.bottomLeftBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.skillsSectionLeft}>
            <h3 className={styles.skillsHeading}>SKILLS & AI STACK</h3>
            <div className={styles.skillsGrid}>
              {leftSkills.map((skill, idx) => (
                <motion.span 
                  key={skill} 
                  className={styles.heroSkillPillLeft}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ duration: 0.2, delay: 0.05 * idx }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Quadrant - Sage Green Skills with Accent */}
        <motion.div 
          className={styles.bottomRightBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.skillsSectionRight}>
            <div className={styles.skillsGrid}>
              {rightSkills.map((skill, idx) => (
                <motion.span 
                  key={skill} 
                  className={styles.heroSkillPillRight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ duration: 0.2, delay: 0.05 * idx }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div className={styles.largeTriangleAccent} />
        </motion.div>

      </div>
    </section>
  );
}
