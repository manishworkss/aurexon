'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Manish Kumar
        </motion.h1>

        <motion.p
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Java Backend Developer &amp; AI Enthusiast
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          I build robust, scalable backend systems and integrate intelligent AI
          solutions. Solved 200+ DSA problems, shipped production websites
          handling real traffic, and actively contributing to open-source.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button href="#projects" variant="primary">
            Explore Projects
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        className={styles.graphic}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.dot} style={{ background: '#ff5f57' }}></span>
            <span className={styles.dot} style={{ background: '#febc2e' }}></span>
            <span className={styles.dot} style={{ background: '#28c840' }}></span>
          </div>
          <pre className={styles.code}>
{`@RestController
public class ManishController {

  @GetMapping("/about")
  public Developer getInfo() {
    return Developer.builder()
      .name("Manish Kumar")
      .role("Backend & AI")
      .stack("Java, Spring Boot")
      .passion("Building things")
      .build();
  }
}`}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
