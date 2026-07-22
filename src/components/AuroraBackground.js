'use client';

import { motion } from 'framer-motion';
import styles from './AuroraBackground.module.css';

const floatingShapes = [
  { id: 1, size: 60, top: '15%', left: '8%', delay: 0, duration: 18 },
  { id: 2, size: 100, top: '65%', left: '85%', delay: 2, duration: 22 },
  { id: 3, size: 45, top: '40%', left: '90%', delay: 5, duration: 15 },
  { id: 4, size: 80, top: '80%', left: '12%', delay: 1, duration: 20 },
  { id: 5, size: 50, top: '25%', left: '75%', delay: 3, duration: 17 },
];

export default function AuroraBackground() {
  return (
    <div className={styles.animWrapper}>
      {/* Animated Organic Ambient Blobs */}
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.blob} ${styles.blob4}`} />
      </div>

      {/* Dynamic Floating Geometric Accents */}
      <div className={styles.shapesLayer}>
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={styles.geoShape}
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle Texture Grain Overlay */}
      <div className={styles.grainOverlay} />
    </div>
  );
}
