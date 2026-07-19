'use client';

import { motion } from 'framer-motion';
function BriefcaseIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Web Developer — Freelance',
    company: 'M.K.R. College',
    period: 'January 2026 – Present',
    points: [
      'Architected and deployed a 12-page production website (mkrcollege.com) using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS — currently serving 300+ monthly visitors.',
      'Built admin-managed notice board, faculty directory, admit-card downloads, gallery, and event modules with 15+ RESTful API endpoints backed by indexed MongoDB collections.',
      'Organised 500+ image assets and 3,200+ student records with indexed queries, reducing data retrieval latency from 1.2s to under 300ms.',
    ],
  },
  {
    role: 'Web Developer — Freelance',
    company: 'Portfolio Sites',
    period: 'March 2026 – Present',
    points: [
      'Delivered 3 client websites in 8 months, including a portfolio site (sukuae.in) that increased the client\'s monthly site visitors from 0 to 150+ within the first 30 days.',
      'Reduced average page load time from 4.2s to 1.8s across all projects by compressing 200+ image assets, implementing lazy loading, and switching to WebP format.',
      'Managed full project cycle for each client — gathered requirements in 2–3 discovery calls, delivered wireframes within 48 hours, and deployed final builds within 2–3 week timelines.',
    ],
  },
  {
    role: 'Java Development Intern',
    company: 'CodeAlpha',
    period: 'October 2025 – November 2025',
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>Experience</h2>
        <p className={styles.subtitle}>Where I&apos;ve been building things.</p>
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
                <BriefcaseIcon size={16} />
              </div>
              {index < experiences.length - 1 && <div className={styles.line}></div>}
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.company}>{exp.company}</p>
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
