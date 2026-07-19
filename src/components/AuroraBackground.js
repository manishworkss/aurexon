'use client';

import styles from './AuroraBackground.module.css';

export default function AuroraBackground() {
  return (
    <div className={styles.auroraWrapper}>
      <div className={styles.auroraContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
        <div className={`${styles.blob} ${styles.blob4}`}></div>
      </div>
      <div className={styles.noiseOverlay}></div>
    </div>
  );
}
