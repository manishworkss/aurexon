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
        <h2 className={styles.heading}>ABOUT AUREXON</h2>
        <p className={styles.description}>
          Aurexon is a next-generation software engineering studio and digital product lab.
          We build high-throughput enterprise backends, intelligent AI reasoning pipelines,
          and modern full-stack web platforms. From high-traffic institutional portals and
          mission-critical cloud backends to autonomous SaaS applications, we architect resilient
          digital infrastructure engineered for speed, security, and scale.
        </p>

        {/* Highlight Credential Pills */}
        <div className={styles.highlightPills}>
          <a href="#experience" className={styles.certBadgePill}>
            ⚡ Sub-400ms AI Reasoning Latency
          </a>
          <a href="#experience" className={styles.certBadgePill}>
            🛡️ Enterprise Spring Boot &amp; Microservices
          </a>
          <a href="#experience" className={styles.certBadgePill}>
            🚀 High-Traffic Production Deployments
          </a>
          <a href="#experience" className={styles.certBadgePill}>
            🌐 Modern Scalable Cloud Architecture
          </a>
        </div>
      </motion.div>
    </section>
  );
}
