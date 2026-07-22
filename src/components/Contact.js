'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function CodeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleEmailClick = (e) => {
    setShowEmail(true);
  };

  const handleMobileClick = (e) => {
    setShowMobile(true);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading}>GET IN TOUCH</h2>
        <p className={styles.subtitle}>
          Have a project in mind or looking for a Java & AI engineer? Let&apos;s connect.
        </p>
      </motion.div>

      <motion.div
        className={styles.gridContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Left Column: Direct Contact & Profiles */}
        <div className={styles.leftColumn}>
          <div className={styles.channelsList}>
            {/* Mobile Item */}
            <a
              href="tel:+918271735190"
              onClick={handleMobileClick}
              className={styles.channelItem}
            >
              <div className={styles.iconCircle}>
                <PhoneIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>MOBILE</span>
                <span className={styles.channelValue}>
                  {showMobile ? '+91 8271735190' : 'Click to view phone'}
                </span>
              </div>
              <div className={styles.externalArrow}>
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Gmail Item */}
            <a
              href="mailto:bcawithmanish0008@gmail.com"
              onClick={handleEmailClick}
              className={styles.channelItem}
            >
              <div className={styles.iconCircle}>
                <MailIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>GMAIL</span>
                <span className={styles.channelValue}>
                  {showEmail ? 'bcawithmanish0008@gmail.com' : 'Click to view & compose mail'}
                </span>
              </div>
              <div className={styles.externalArrow}>
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manish-kumar-37349633a/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelItem}
            >
              <div className={styles.iconCircle}>
                <LinkedinIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>LINKEDIN</span>
                <span className={styles.channelValue}>manish-kumar-37349633a</span>
              </div>
              <div className={styles.externalArrow}>
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/manishworkss"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelItem}
            >
              <div className={styles.iconCircle}>
                <GithubIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>GITHUB</span>
                <span className={styles.channelValue}>manishworkss</span>
              </div>
              <div className={styles.externalArrow}>
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Manishkr92/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelItem}
            >
              <div className={styles.iconCircle}>
                <CodeIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>LEETCODE</span>
                <span className={styles.channelValue}>Manishkr92</span>
              </div>
              <div className={styles.externalArrow}>
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Send a Message Form */}
        <div className={styles.rightCard}>
          <h3 className={styles.cardTitle}>SEND A MESSAGE</h3>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>From (Name)</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mail / Contact No.</label>
              <input
                type="text"
                required
                placeholder="Email or Phone Number"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Subject</label>
              <input
                type="text"
                required
                placeholder="What is this regarding?"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Related To</label>
              <select className={styles.formSelect} defaultValue="To Hire">
                <option value="To Hire">To Hire</option>
                <option value="Freelance Project">Freelance Project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="General Query">General Query</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                required
                rows={4}
                placeholder="Your message..."
                className={styles.formTextarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {submitted ? '✓ Message Sent Successfully!' : '+ Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
