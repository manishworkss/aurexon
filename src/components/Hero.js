'use client';

import { useSyncExternalStore, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const leftSkills = [
  'Java',
  'Spring Boot',
  'AI Agents',
  'Python',
  'REST APIs',
  'React.js',
  'Node.js',
  'MySQL',
  'WordPress',
];

const rightSkills = [
  'RAG & Embeddings',
  'NLP Assistant',
  'FastAPI',
  'Git & GitHub',
  'Postman',
  'Firebase',
  'LeetCode 200+',
];

function subscribeTouch(callback) {
  if (typeof window === 'undefined') return () => {};
  const media = window.matchMedia('(hover: none) or (pointer: coarse)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

function getTouchSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: none) or (pointer: coarse)').matches;
}

function getServerSnapshot() {
  return false;
}

export default function Hero() {
  const containerRef = useRef(null);
  const isTouchDevice = useSyncExternalStore(subscribeTouch, getTouchSnapshot, getServerSnapshot);

  // Motion values for smooth 3D mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth spring physics for Windows & macOS desktop
  const smoothX = useSpring(mouseX, { stiffness: 140, damping: 24, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 140, damping: 24, mass: 0.5 });

  // 3D rotations for the central portrait card
  const cardRotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const cardRotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  
  // Parallax offsets for floating 3D holographic badges
  const badgeTranslateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const badgeTranslateY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const badge2TranslateX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const badge2TranslateY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  // Floating background geometry parallax
  const bgGeomX = useTransform(smoothX, [-0.5, 0.5], [25, -25]);
  const bgGeomY = useTransform(smoothY, [-0.5, 0.5], [25, -25]);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className={styles.heroSection} 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.heroGrid}>
        
        {/* Top Left Quadrant - Dark Forest Green Bio */}
        <motion.div 
          className={styles.topLeftBlock}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bioContent}>
            {/* Live Status Pill */}
            <motion.div 
              className={styles.statusPill}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className={styles.aiDot} />
              <span>Full-Stack &amp; AI Systems Engineer</span>
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
              Backend Developer &amp; AI Engineer specializing in Java, Spring Boot, REST APIs, and LLM reasoning workflows. Building production-ready applications, scalable architectures, and autonomous AI agents.
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
              <a href="#projects" className={styles.exploreProjectsBtn}>
                Explore Work ▾
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Top Right Quadrant - Warm Sand with 3D Depth Geometries */}
        <motion.div 
          className={styles.topRightBlock}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 3D Geometric Floating Objects with Parallax */}
          <motion.div 
            className={`${styles.triangle} ${styles.tri1}`}
            style={!isTouchDevice ? { x: bgGeomX, y: bgGeomY } : {}}
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
          />
          <motion.div 
            className={`${styles.triangle} ${styles.tri2}`}
            animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div 
            className={`${styles.triangle} ${styles.tri3}`}
            animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
          />

          {/* 3D Floating Kinetic Polyhedron / Cube */}
          <motion.div 
            className={styles.cubeWireframe}
            animate={{ 
              rotateX: [0, 360], 
              rotateY: [0, 360],
              y: [0, -15, 0]
            }}
            transition={{ 
              rotateX: { repeat: Infinity, duration: 18, ease: 'linear' },
              rotateY: { repeat: Infinity, duration: 24, ease: 'linear' },
              y: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
            }}
          >
            <div className={styles.cubeInnerRing} />
          </motion.div>

          {/* Decorative Floating Tech Symbols */}
          <motion.div 
            className={`${styles.techSymbol} ${styles.sym1}`}
            animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
          >
            &lt;/&gt;
          </motion.div>
          <motion.div 
            className={`${styles.techSymbol} ${styles.sym2}`}
            animate={{ y: [0, 16, 0], rotate: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 0.5 }}
          >
            {`{ }`}
          </motion.div>
          <motion.div 
            className={`${styles.techSymbol} ${styles.sym3}`}
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
          >
            ⌘
          </motion.div>
        </motion.div>

        {/* 3D Holographic Center Portrait Card with True Depth & Parallax */}
        <motion.div 
          className={styles.centerPortraitCard}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={
            isTouchDevice
              ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                  rotateX: [0, 3, 0, -3, 0],
                  rotateY: [0, -4, 0, 4, 0],
                  transition: {
                    y: { repeat: Infinity, duration: 5.5, ease: 'easeInOut' },
                    rotateX: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                    rotateY: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                    opacity: { duration: 0.6 }
                  }
                }
              : {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: cardRotateX,
                  rotateY: cardRotateY,
                  transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
                }
          }
          whileHover={!isTouchDevice ? { scale: 1.035 } : {}}
        >
          {/* Card Body with 3D Depth Layers */}
          <div className={styles.portraitWrapper}>
            <Image
              src="/profile-natural.png"
              alt="Manish Kumar"
              width={480}
              height={560}
              priority
              className={styles.portraitImage}
            />

            {/* Subtle 3D dynamic specular sheen */}
            <div className={styles.specularGlare} />

            {/* 3D Floating Holographic Badge 1: Top-Left */}
            <motion.div 
              className={styles.holoBadgeTop}
              style={!isTouchDevice ? { x: badgeTranslateX, y: badgeTranslateY } : {}}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className={styles.badgePulseDot} />
              <div>
                <span className={styles.badgeLabel}>AI &amp; Distributed Systems</span>
                <span className={styles.badgeSub}>Spring Boot · Groq LLMs</span>
              </div>
            </motion.div>

            {/* 3D Floating Holographic Badge 2: Bottom-Right */}
            <motion.div 
              className={styles.holoBadgeBottom}
              style={!isTouchDevice ? { x: badge2TranslateX, y: badge2TranslateY } : {}}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.3 }}
            >
              <span className={styles.starIcon}>★</span>
              <div>
                <span className={styles.badgeLabel}>LeetCode 200+</span>
                <span className={styles.badgeSub}>Full-Stack &amp; REST APIs</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Left Quadrant - Dark Olive Green Skills with 3D Interactive Pills */}
        <motion.div 
          className={styles.bottomLeftBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.skillsSectionLeft}>
            <div className={styles.skillsHeaderRow}>
              <h3 className={styles.skillsHeading}>CORE SKILLS &amp; BACKEND</h3>
              <span className={styles.skillsSubCounter}>9 Technologies</span>
            </div>
            <div className={styles.skillsGrid}>
              {leftSkills.map((skill, idx) => (
                <motion.span 
                  key={skill} 
                  className={styles.heroSkillPillLeft}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08, y: -3, zIndex: 10 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, delay: 0.04 * idx }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Quadrant - Sage Green Skills with 3D Accents */}
        <motion.div 
          className={styles.bottomRightBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.skillsSectionRight}>
            <div className={styles.skillsHeaderRow}>
              <h3 className={styles.skillsHeadingSage}>AI &amp; CLOUD INFRASTRUCTURE</h3>
              <span className={styles.skillsSubCounterSage}>7 Specializations</span>
            </div>
            <div className={styles.skillsGrid}>
              {rightSkills.map((skill, idx) => (
                <motion.span 
                  key={skill} 
                  className={styles.heroSkillPillRight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08, y: -3, zIndex: 10 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2, delay: 0.04 * idx }}
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
