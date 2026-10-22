'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>ABOUT ME</h2>
        <p className={styles.description}>
          I&apos;m a Java Backend Developer and AI Enthusiast based in Vadodara,
          Gujarat. I enjoy building things that actually work — from college
          websites handling real traffic to SaaS platforms with AI under the hood.
          I work mostly with Java, Spring Boot, React, Node.js, and WordPress.
          I&apos;ve solved 200+ DSA problems on LeetCode and actively contribute
          to open-source projects. Always looking for interesting problems to
          pick apart and ship something useful.
        </p>

        {/* Highlight Credential Pills */}
        <div className={styles.highlightPills}>
          <a href="#certifications" className={styles.certBadgePill}>
            🏅 NPTEL Certified (IIT Kharagpur)
          </a>
          <a href="#certifications" className={styles.certBadgePill}>
            🏅 HackerRank React Developer
          </a>
          <a href="#certifications" className={styles.certBadgePill}>
            🏅 HackerRank Software Engineer
          </a>
          <a href="#certifications" className={styles.certBadgePill}>
            🏅 CodeAlpha Java Intern (LOR)
          </a>
        </div>
      </motion.div>
    </section>
  );
}
