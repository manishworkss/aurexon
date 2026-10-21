'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function GmailLogoIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function LinkedinLogoIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
    </svg>
  );
}

function GithubLogoIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LeetcodeLogoIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 6.2a1.374 1.374 0 0 0-.416.973v1.545c0 .365.145.714.405.973l.01.01a1.374 1.374 0 0 0 1.944 0l5.35-5.326a1.374 1.374 0 0 0 0-1.944L13.483 0zM5.38 8.136a1.374 1.374 0 0 0-.973.405L.405 12.543a1.374 1.374 0 0 0 0 1.944l4.002 4.002a1.374 1.374 0 0 0 1.944 0l3.992-3.992a1.374 1.374 0 0 0 0-1.944l-4.002-4.002a1.374 1.374 0 0 0-.961-.415zm13.24 0a1.374 1.374 0 0 0-.973.405l-4.002 4.002a1.374 1.374 0 0 0 0 1.944l3.992 3.992a1.374 1.374 0 0 0 1.944 0l4.002-4.002a1.374 1.374 0 0 0 0-1.944l-4.002-4.002a1.374 1.374 0 0 0-.961-.415z"/>
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
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    category: 'To Hire',
    message: '',
    honeypot: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Honeypot check: if filled, quietly drop spam without alerting the bot
    if (formData.honeypot) {
      setSubmitted(true);
      setFormData({ name: '', contact: '', subject: '', category: 'To Hire', message: '', honeypot: '' });
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/bcawithmanish0008@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Contact: formData.contact,
          Subject: formData.subject,
          Related_To: formData.category,
          Message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name}: ${formData.subject}`,
          _honey: formData.honeypot,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', contact: '', subject: '', category: 'To Hire', message: '', honeypot: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to send. Please click Gmail on the left to send directly.');
    } finally {
      setLoading(false);
    }
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
        {/* Left Column: Authentic Brand Profile Cards */}
        <div className={styles.leftColumn}>
          <div className={styles.channelsList}>
            {/* Gmail */}
            <a
              href="mailto:bcawithmanish0008@gmail.com"
              className={styles.channelItem}
            >
              <div className={`${styles.iconCircle} ${styles.gmailBg}`}>
                <GmailLogoIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>Gmail</span>
                <span className={styles.channelSubtext}>bcawithmanish0008@gmail.com</span>
              </div>
              <div className={styles.externalArrow}>
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* Mobile No */}
            <a
              href="tel:+918271735190"
              className={styles.channelItem}
            >
              <div className={`${styles.iconCircle} ${styles.mobileBg}`}>
                <PhoneIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>Mobile No</span>
                <span className={styles.channelSubtext}>+91 8271735190</span>
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
              <div className={`${styles.iconCircle} ${styles.linkedinBg}`}>
                <LinkedinLogoIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>LinkedIn</span>
                <span className={styles.channelSubtext}>manish-kumar-37349633a</span>
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
              <div className={`${styles.iconCircle} ${styles.githubBg}`}>
                <GithubLogoIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>GitHub</span>
                <span className={styles.channelSubtext}>manishworkss</span>
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
              <div className={`${styles.iconCircle} ${styles.leetcodeBg}`}>
                <LeetcodeLogoIcon size={18} />
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelTitle}>LeetCode</span>
                <span className={styles.channelSubtext}>Manishkr92</span>
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
            {/* Honeypot anti-spam field (hidden from human visitors) */}
            <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="website_hp">Leave this field blank</label>
              <input
                id="website_hp"
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>From (Name)</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Mail / Contact No.</label>
              <input
                type="text"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email or Phone Number"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Related To</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={styles.formSelect}
              >
                <option value="To Hire">To Hire</option>
                <option value="Freelance Project">Freelance Project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="General Query">General Query</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className={styles.formTextarea}
              ></textarea>
            </div>

            {errorMsg && <p className={styles.errorMessage}>{errorMsg}</p>}

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading
                ? 'Sending Message...'
                : submitted
                ? '✓ Delivered to bcawithmanish0008@gmail.com!'
                : '+ Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
