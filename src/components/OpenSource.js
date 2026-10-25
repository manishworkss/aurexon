'use client';

import { motion } from 'framer-motion';
import styles from './OpenSource.module.css';

function ExternalLinkIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

function StarIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const openSourceRepos = [
  {
    name: 'Futureforge-ai',
    description: 'Autonomous SaaS career development platform powered by Groq Llama-3.3 70B & Spring Boot REST architecture.',
    language: 'Java / React',
    langClass: 'langJava',
    url: 'https://github.com/manishworkss/Futureforge-ai',
    badge: 'Flagship AI',
  },
  {
    name: 'CodeAlpha-Artificial-IntelligenceChatbot',
    description: 'Advanced Java AI conversational agent with Swing GUI, calculus solver engine, and multi-turn dialogue memory.',
    language: 'Java',
    langClass: 'langJava',
    url: 'https://github.com/manishworkss/CodeAlpha-Artificial-IntelligenceChatbot',
    badge: 'NLP Engine',
  },
  {
    name: 'SentixAi',
    description: 'Multi-modal AI assistant integrating real-time computer vision sentiment detection with FastAPI.',
    language: 'Python',
    langClass: 'langPython',
    url: 'https://github.com/manishworkss/SentixAi',
    badge: 'Vision & ML',
  },
  {
    name: 'manishworkss',
    description: 'My GitHub profile repository featuring continuous automated GitHub Actions contribution snake workflow.',
    language: 'Markdown / CI/CD',
    langClass: 'langJavaScript',
    url: 'https://github.com/manishworkss/manishworkss',
    badge: 'Profile Hub',
  },
];

export default function OpenSource() {
  return (
    <section className={styles.openSourceSection} id="opensource">
      {/* Section Header */}
      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45 }}
      >
        <span className={styles.tagBadge}>OPEN SOURCE & CONTRIBUTIONS</span>
        <h2 className={styles.heading}>GITHUB ECOSYSTEM</h2>
        <p className={styles.subtitle}>
          Active open source contributions, algorithmic repositories, and autonomous CI/CD pipelines.
        </p>
      </motion.div>

      {/* Snake Contribution Grid Card */}
      <motion.div
        className={styles.snakeCard}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.snakeHeader}>
          <div className={styles.snakeTitleRow}>
            <GithubIcon size={20} />
            <h3 className={styles.snakeTitle}>Contribution Activity Matrix</h3>
            <span className={styles.liveIndicator}>
              <span className={styles.pulseDot} />
              <span>LIVE CI/CD</span>
            </span>
          </div>

          <a
            href="https://github.com/manishworkss"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubProfileLink}
          >
            <span>Follow @manishworkss</span>
            <ExternalLinkIcon size={13} />
          </a>
        </div>

        {/* Visual Snake Image */}
        <div className={styles.snakeImageContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://raw.githubusercontent.com/manishworkss/manishworkss/output/github-contribution-grid-snake-dark.svg"
            alt="GitHub Contribution Snake by Manish Kumar"
            className={styles.snakeImage}
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Featured Repositories Grid */}
      <div className={styles.reposGrid}>
        {openSourceRepos.map((repo, idx) => (
          <motion.div
            key={repo.name}
            className={styles.repoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <div>
              <div className={styles.repoTop}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoName}
                >
                  {repo.name}
                </a>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoExternalLink}
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <ExternalLinkIcon size={16} />
                </a>
              </div>
              <p className={styles.repoDesc}>{repo.description}</p>
            </div>

            <div className={styles.repoBottom}>
              <div className={styles.repoLanguage}>
                <span className={`${styles.langDot} ${styles[repo.langClass]}`} />
                <span>{repo.language}</span>
              </div>
              <span className={styles.repoStars}>
                {repo.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
