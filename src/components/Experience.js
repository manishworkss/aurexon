'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

function BriefcaseIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

const experiences = [
  {
    company: 'M.K.R. College Website',
    role: 'Freelance Web Developer',
    period: 'Jan 2026 – Present',
    live: 'https://mkrcollege.com',
    image: '/experience/mkrcollege.png',
    points: [
      'Architected and deployed a 12-page production college website (mkrcollege.com) using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS — serving 300+ monthly visitors.',
      'Built admin-managed notice board, faculty directory, admit-card downloads, gallery, and event modules with 15+ RESTful API endpoints backed by indexed MongoDB collections.',
      'Organised 500+ image assets and 3,200+ student records with indexed queries, reducing data retrieval latency from 1.2s to under 300ms.',
    ],
  },
  {
    company: 'Sudhakar VFX & Animation Portfolio',
    role: 'Freelance Web Developer',
    period: 'Mar 2026 – Present',
    live: 'https://sukuae.in',
    image: '/experience/sukuae.png',
    points: [
      'Designed and developed a custom high-performance creative portfolio (sukuae.in) for a VFX & Animation artist, increasing monthly site visitors from 0 to 150+ within 30 days.',
      'Optimized 200+ media assets, video montages, and image galleries with lazy loading and WebP formats, accelerating initial page render to under 1.8s.',
      'Engineered custom dark-theme glassmorphic cards and interactive project galleries tailored to visual storytelling.',
    ],
  },

  {
    company: 'CodeAlpha',
    role: 'Java Development Intern',
    period: 'Oct 2025 – Nov 2025',
    live: null,
    image: null,
    points: [
      'Built a Hotel Reservation System in Java with Swing GUI — implemented 5 room categories, real-time search across 50+ rooms, booking confirmation flow, payment simulation, and File I/O persistence.',
      'Developed a Stock Trading Platform supporting simulated buy/sell of 20+ stocks with portfolio tracking, transaction history logging, and real-time profit/loss calculation.',
      'Coded an AI Chatbot handling 30+ intent categories using keyword-based NLP, delivering contextual responses with under 200ms response time.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Experience() {
  return (
    <section className={styles.experienceSection} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>EXPERIENCE</h2>
        <p className={styles.subtitle}>Where I&apos;ve been building & shipping production systems.</p>
      </motion.div>

      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className={styles.item} variants={itemVariants}>
            <div className={styles.marker}>
              <div className={styles.iconCircle}>
                <BriefcaseIcon size={18} />
              </div>
              {index < experiences.length - 1 && <div className={styles.line}></div>}
            </div>

            <div className={styles.content}>
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <span className={styles.roleTag}>{exp.role}</span>
                </div>

                <div className={styles.headerRight}>
                  <span className={styles.period}>{exp.period}</span>
                  {exp.live && (
                    <a
                      href={exp.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visitBtn}
                    >
                      <span>Live Site</span>
                      <ExternalLinkIcon size={13} />
                    </a>
                  )}
                </div>
              </div>

              {exp.image && (
                <a
                  href={exp.live || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewContainer}
                >
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className={styles.previewImage}
                  />
                </a>
              )}

              <ul className={styles.points}>
                {exp.points.map((point, i) => (
                  <li key={i} className={styles.point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
