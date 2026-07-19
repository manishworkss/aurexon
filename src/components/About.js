'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = [
  { name: 'Java', category: 'lang' },
  { name: 'Python', category: 'lang' },
  { name: 'JavaScript', category: 'lang' },
  { name: 'SQL', category: 'lang' },
  { name: 'Spring Boot', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'React.js', category: 'framework' },
  { name: 'REST APIs', category: 'framework' },
  { name: 'FastAPI', category: 'framework' },
  { name: 'MongoDB', category: 'db' },
  { name: 'MySQL', category: 'db' },
  { name: 'Firebase', category: 'db' },
  { name: 'Supabase', category: 'db' },
  { name: 'Git & GitHub', category: 'tool' },
  { name: 'Postman', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
  { name: 'Java Swing', category: 'tool' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function About() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>About</h2>
        <p className={styles.description}>
          I&apos;m a Java Backend Developer and AI Enthusiast based in Vadodara,
          Gujarat. I enjoy building things that actually work — from college
          websites handling real traffic to SaaS platforms with AI under the hood.
          I work mostly with Java, Spring Boot, React, Node.js, and MongoDB.
          I&apos;ve solved 200+ DSA problems on LeetCode and actively contribute
          to open-source projects. Always looking for interesting problems to
          pick apart and ship something useful.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h3 className={styles.subheading}>Skills & Technologies</h3>
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              className={styles.skill}
              variants={itemVariants}
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
