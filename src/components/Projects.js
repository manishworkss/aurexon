'use client';

import { motion } from 'framer-motion';
function ExternalLinkIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import Card from './Card';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'FutureForge AI',
    subtitle: 'Intelligent SaaS Career Platform',
    description:
      'A SaaS career platform that analyzes student profiles to recommend personalized learning roadmaps. Features a conversational AI mentor powered by GPT OSS 20B via Groq API, automated PDF report generation, and secure auth with JWT & Google OAuth2.',
    stack: ['React.js', 'Spring Boot', 'MySQL', 'GPT OSS 20B', 'REST APIs'],
    github: '#',
    live: '#',
  },
  {
    title: 'IntelliBot Pro',
    subtitle: 'Advanced Java AI Chatbot',
    description:
      'An advanced Java-based AI Chatbot with NLP capabilities and a professional Swing GUI. Features intelligent conversational handling, programming assistance, and mathematical calculations with under 200ms response time.',
    stack: ['Java', 'Swing GUI', 'NLP', 'OOP'],
    github: '#',
    live: null,
  },
  {
    title: 'M.K.R. College Website',
    subtitle: 'Production College Platform',
    description:
      'A 12-page production website serving 300+ monthly visitors. Built admin-managed notice board, faculty directory, admit-card downloads, and gallery modules with 15+ RESTful API endpoints and indexed MongoDB collections.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: '#',
    live: 'https://mkrcollege.com',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.subtitle}>A selection of things I&apos;ve built.</p>
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
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.links}>
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
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
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
