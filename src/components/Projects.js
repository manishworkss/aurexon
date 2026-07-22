'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Card from './Card';
import styles from './Projects.module.css';

function ExternalLinkIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: 'FutureForge AI',
    subtitle: 'Intelligent SaaS Career Platform',
    category: 'PROJECT',
    description:
      'An autonomous SaaS career platform leveraging LLM reasoning (Groq Llama-3.3 70B) for multi-week milestone progression, AI candidate evaluation, and real-time mentorship.',
    stack: ['React 18', 'Spring Boot', 'MySQL', 'Groq Llama-3.3', 'REST APIs'],
    github: 'https://github.com/manishworkss/Futureforge-ai',
    live: 'https://futureforge-ai-sage.vercel.app/',
    image: '/projects/futureforge.png',
  },
  {
    title: 'IntelliBot Pro',
    subtitle: 'Advanced Java AI Chatbot',
    category: 'PROJECT',
    description:
      'An advanced Java AI Chatbot featuring a responsive desktop Swing GUI, linear algebra & calculus equation solver engine, and programming assistant.',
    stack: ['Java 21', 'Swing GUI', 'NLP', 'OOP', 'Spring Boot'],
    github: 'https://github.com/manishworkss/CodeAlpha-Artificial-IntelligenceChatbot',
    live: 'https://intellibot-pro.vercel.app/',
    image: '/projects/intellibot.png',
  },
  {
    title: 'Hotel Reservation System',
    subtitle: 'Java & Swing Booking System',
    category: 'PROJECT',
    description:
      'A Java OOP desktop application featuring room categorization, real-time search & room booking, reservation management, and simulated payment confirmation.',
    stack: ['Java 21', 'Swing GUI', 'OOP', 'SQL', 'Data Structures'],
    github: 'https://github.com/manishworkss/CodeAlpha_Hotel-Reservation-System',
    live: 'https://github.com/manishworkss/CodeAlpha_Hotel-Reservation-System',
    image: '/projects/hotel_reservation.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section className={styles.sectionContainer} id="projects">
      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>PROJECTS</h2>
        <p className={styles.subtitle}>Selected software applications & AI implementations</p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants}>
            <Card className={styles.projectCard}>
              {/* Full Width Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className={styles.projectCoverImage}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.links}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="GitHub Repo"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="Live Demo"
                      >
                        <ExternalLinkIcon size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.stackList}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.stackPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
