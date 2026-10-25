'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CloseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function InfoIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

const projects = [
  {
    title: 'FutureForge AI',
    subtitle: 'Intelligent SaaS Career Platform',
    category: 'AI / SAAS',
    description:
      'An autonomous SaaS career platform leveraging LLM reasoning (Groq Llama-3.3 70B) for multi-week milestone progression, AI candidate evaluation, and real-time mentorship.',
    architecture: [
      'Spring Boot REST backend with MySQL relational schema and secure JWT authentication.',
      'Groq Llama-3.3 70B LLM integration with sub-400ms contextual inference.',
      'Personalized milestone generator dynamically adapting to student course progressions.',
      'Responsive React 18 frontend with dark/light glassmorphic UI architecture.'
    ],
    metric: '< 400ms AI Response Time',
    stack: ['React 18', 'Spring Boot', 'MySQL', 'Groq Llama-3.3', 'REST APIs'],
    github: 'https://github.com/manishworkss/Futureforge-ai',
    live: 'https://futureforge-ai-sage.vercel.app/',
    image: '/projects/futureforge.png',
  },
  {
    title: 'IntelliBot Pro',
    subtitle: 'Advanced Java AI Chatbot',
    category: 'JAVA / NLP',
    description:
      'An advanced Java AI Chatbot featuring a responsive desktop Swing GUI, linear algebra & calculus equation solver engine, and multi-turn dialogue management.',
    architecture: [
      'Pure Java OOP architecture utilizing modular design patterns and clean state management.',
      'Native equation solver capable of symbolic simplification and step-by-step calculus output.',
      'Contextual conversation tracker maintaining multi-turn memory without remote server dependencies.',
      'Custom styled Swing graphical interface with keyboard navigation shortcuts.'
    ],
    metric: '100% Offline Capable',
    stack: ['Java', 'Swing GUI', 'NLP', 'OOP', 'Spring Boot'],
    github: 'https://github.com/manishworkss/CodeAlpha-Artificial-IntelligenceChatbot',
    live: 'https://intellibot-pro.vercel.app/',
    image: '/projects/intellibot.png',
  },
  {
    title: 'SentixAI',
    subtitle: 'AI-Powered Movie Sentiment Intelligence',
    category: 'MACHINE LEARNING',
    description:
      'An enterprise-grade movie review intelligence platform with real-time sentiment tracking, DistilBERT NLP inference, a Letterboxd-inspired discovery UI, and an executive analytics dashboard.',
    architecture: [
      'Hugging Face DistilBERT fine-tuned model pipeline classifying complex sentiment polarity.',
      'FastAPI microservice interfacing with Prisma ORM and MySQL database cluster.',
      'Real-time aggregation engine generating sentiment distribution analytics and ratings trends.',
      'Interactive React 18 interface with animated charts and filterable catalog.'
    ],
    metric: '94.2% Sentiment Accuracy',
    stack: ['React 18', 'TypeScript', 'Node.js', 'DistilBERT AI', 'Prisma', 'MySQL'],
    github: 'https://github.com/manishworkss/SentixAi',
    live: 'https://github.com/manishworkss/SentixAi',
    image: '/projects/sentixai.png',
  },
];

const openSourceContributions = [
  {
    title: 'GirlScript Summer of Code (GSSoC)',
    subtitle: 'Open Source Contributor',
    category: 'OPEN SOURCE',
    description:
      'Actively contributed to open-source repositories during GSSoC. Authored merged pull requests resolving critical backend bugs, optimizing REST APIs, and improving developer documentation.',
    stack: ['Open Source', 'GSSoC Contributor', 'Git & GitHub', 'Java', 'React'],
    github: 'https://github.com/manishworkss',
    live: 'https://gssoc.girlscript.org/profile/6e801805-7cc0-46e4-b5f2-ed465c4eb7c8',
    image: '/projects/gssoc_banner.png',
  },
  {
    title: 'PU Code Hackathon 3.0',
    subtitle: 'Active Participant & Developer',
    category: 'HACKATHON',
    description:
      'Participated in the PU Code Hackathon 3.0 organized by Parul University in collaboration with Vadodara Municipal Corporation. Fostered innovation and developed solutions under strict time constraints.',
    stack: ['Hackathon', 'Problem Solving', 'Innovation', 'Team Collaboration'],
    github: null,
    live: null,
    image: '/projects/pu_hackathon.png',
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
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className={styles.sectionContainer} id="projects">
      {/* Featured Projects Header */}
      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.tagBadge}>FLAGSHIP WORK</span>
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
              <div 
                className={styles.imageContainer}
                onClick={() => setSelectedProject(project)}
                title="Click to inspect architecture"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.projectCoverImage}
                />
                <div className={styles.imageOverlay}>
                  <span>Click to Inspect Architecture 🔍</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>
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

                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.stackList}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.stackPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className={styles.inspectBtn}
                  onClick={() => setSelectedProject(project)}
                >
                  <InfoIcon size={14} />
                  <span>Inspect Architecture & Metrics</span>
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Hackathons & Community Section (Renamed anchor to prevent ID collisions) */}
      <div id="hackathons" style={{ paddingTop: '3.5rem' }}>
        <motion.div
          className={styles.headerBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.tagBadge}>EXPERIENCES</span>
          <h2 className={styles.heading}>HACKATHONS & COMMUNITY</h2>
          <p className={styles.subtitle}>Community programs, open-source initiatives & competitive hackathons</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {openSourceContributions.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <Card className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.projectCoverImage}
                  />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <div className={styles.links}>
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconBtn}
                          aria-label="GitHub Profile"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconBtn}
                          aria-label="Contributor Profile"
                        >
                          <ExternalLinkIcon size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className={styles.projectSubtitle}>{item.subtitle}</p>
                  <p className={styles.projectDescription}>{item.description}</p>
                  
                  <div className={styles.stackList}>
                    {item.stack.map((tech) => (
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
      </div>

      {/* Interactive Project Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <div>
                  <span className={styles.modalCategoryBadge}>{selectedProject.category}</span>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <p className={styles.modalSubtitle}>{selectedProject.subtitle}</p>
                </div>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                >
                  <CloseIcon size={20} />
                </button>
              </div>

              {/* Modal Banner */}
              <div className={styles.modalImageWrapper}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={900}
                  height={450}
                  style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover' }}
                />
              </div>

              {/* Modal Body */}
              <div className={styles.modalBody}>
                {selectedProject.metric && (
                  <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Key System Metric</span>
                    <span className={styles.metricVal}>{selectedProject.metric}</span>
                  </div>
                )}

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionHeading}>System Overview</h4>
                  <p className={styles.modalDescText}>{selectedProject.description}</p>
                </div>

                {selectedProject.architecture && (
                  <div className={styles.modalSection}>
                    <h4 className={styles.modalSectionHeading}>Architectural Highlights</h4>
                    <ul className={styles.archList}>
                      {selectedProject.architecture.map((item, idx) => (
                        <li key={idx} className={styles.archItem}>
                          <span className={styles.bullet}>▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionHeading}>Technologies & Tools</h4>
                  <div className={styles.modalStackList}>
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className={styles.modalStackPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions Footer */}
              <div className={styles.modalFooter}>
                <div className={styles.modalLinkGroup}>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryActionBtn}
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLinkIcon size={14} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryActionBtn}
                    >
                      <GithubIcon size={16} />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  className={styles.doneBtn}
                  onClick={() => setSelectedProject(null)}
                >
                  Close Inspector
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
