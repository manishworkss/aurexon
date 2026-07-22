'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Parul University',
    location: 'Vadodara, Gujarat',
    period: 'August 2024 – May 2027',
  },
  {
    degree: 'Intermediate (12th Science)',
    institution: 'J.R.C. Inter College, Nayagaon, Vaishali',
    location: 'Patna, Bihar',
    period: 'March 2021',
  },
];

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
          I work mostly with Java, Spring Boot, React, Node.js, and MongoDB.
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

      {/* Education Section */}
      <motion.div
        id="education"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className={styles.subheading}>EDUCATION</h3>
        <div className={styles.eduGrid}>
          {education.map((edu) => (
            <div key={edu.degree} className={styles.eduCard}>
              <div className={styles.eduHeader}>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <span className={styles.period}>{edu.period}</span>
              </div>
              <p className={styles.institution}>
                {edu.institution} — <span className={styles.location}>{edu.location}</span>
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
