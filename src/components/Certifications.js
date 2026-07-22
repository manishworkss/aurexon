'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import styles from './Certifications.module.css';

function CheckBadgeIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ExternalIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CloseIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const certificates = [
  {
    id: 'nptel-cnip',
    title: 'Computer Networks and Internet Protocol',
    issuer: 'NPTEL, IIT Kharagpur (Govt. of India)',
    date: 'Jan – Apr 2026',
    score: '54% Consolidated Score (12 Weeks)',
    credentialId: 'NPTEL26CS35S2685404889',
    image: '/certificates/nptel_cnip-1.png',
    tags: ['Computer Networks', 'TCP/IP', 'IIT Kharagpur', 'Routing & Protocols'],
    featured: true,
  },
  {
    id: 'hackerrank-react',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: '07 May, 2026',
    score: 'Passed Role Certification Test',
    credentialId: 'C1285A58BC7D',
    image: '/certificates/hackerrank_react-1.png',
    tags: ['React.js', 'Frontend Architecture', 'HackerRank', 'State Management'],
    featured: true,
  },
  {
    id: 'hackerrank-swe',
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    date: '06 May, 2026',
    score: 'Passed Role Certification Test',
    credentialId: 'ED168F757AB9',
    image: '/certificates/hackerrank_swe-1.png',
    tags: ['Software Engineering', 'Algorithms', 'Data Structures', 'HackerRank'],
    featured: true,
  },
  {
    id: 'nptel-db',
    title: 'Introduction to Databases',
    issuer: 'NPTEL, IIT Kharagpur',
    date: 'Jan 2025 – Apr 2025',
    score: '12-Week NPTEL Online Course',
    credentialId: 'IIT Kharagpur Verified',
    image: '/certificates/nptel_cnip-1.png',
    tags: ['Database Systems', 'SQL', 'Relational DB', 'IIT Kharagpur'],
    featured: false,
  },
  {
    id: 'codealpha-java',
    title: 'Java Programming Internship',
    issuer: 'CodeAlpha',
    date: 'November 2025',
    score: 'Completion Certificate & Letter of Recommendation',
    credentialId: 'CodeAlpha Verified',
    image: '/certificates/hackerrank_swe-1.png',
    tags: ['Java 21', 'Swing GUI', 'OOP Persistence', 'CodeAlpha'],
    featured: false,
  },
  {
    id: 'parul-db',
    title: 'Modern Databases: Relational, NoSQL & Cloud DBs',
    issuer: 'Parul University',
    date: 'March 2025',
    score: '16-Hour Intensive Certification',
    credentialId: 'Parul University',
    image: '/certificates/hackerrank_react-1.png',
    tags: ['MongoDB', 'NoSQL', 'Cloud DBs', 'MySQL'],
    featured: false,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className={styles.certSection} id="certifications">
      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sectionHeaderFlex}>
          <div>
            <h2 className={styles.heading}>CERTIFICATIONS & COURSES</h2>
            <p className={styles.subtitle}>
              Verified Credentials from IIT Kharagpur, HackerRank & Industry Programs
            </p>
          </div>
          <div className={styles.certCountBadge}>
            <span>{certificates.length} VERIFIED CERTIFICATES</span>
          </div>
        </div>
      </motion.div>

      <div className={styles.grid}>
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <Card className={styles.certCard}>
              {/* Proof Image Preview */}
              <div 
                className={styles.imageContainer}
                onClick={() => setSelectedCert(cert)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.certImage}
                />
                <div className={styles.overlayHover}>
                  <span>Click to view proof image 🔍</span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                <div className={styles.badgeRow}>
                  <span className={styles.certifiedPill}>
                    <CheckBadgeIcon size={13} />
                    <span>CERTIFIED</span>
                  </span>
                  <span className={styles.dateText}>{cert.date}</span>
                </div>

                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>

                <div className={styles.scoreBox}>
                  <span className={styles.scoreLabel}>{cert.score}</span>
                  {cert.credentialId && (
                    <span className={styles.credId}>ID: {cert.credentialId}</span>
                  )}
                </div>

                <div className={styles.tagsRow}>
                  {cert.tags.map((tag) => (
                    <span key={tag} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  className={styles.viewProofBtn}
                  onClick={() => setSelectedCert(cert)}
                >
                  <span>CLICK TO VIEW PROOF</span>
                  <ExternalIcon size={14} />
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Proof Modal Dialog */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <h3 className={styles.modalTitle}>{selectedCert.title}</h3>
                  <p className={styles.modalIssuer}>{selectedCert.issuer} — {selectedCert.date}</p>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close proof viewer"
                >
                  <CloseIcon size={20} />
                </button>
              </div>

              <div className={styles.modalBodyImage}>
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={1000}
                  height={720}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>

              <div className={styles.modalFooter}>
                <span className={styles.credText}>Credential ID: {selectedCert.credentialId}</span>
                <button
                  className={styles.doneBtn}
                  onClick={() => setSelectedCert(null)}
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
