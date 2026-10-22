'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Experience.module.css';

function ExternalLinkIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function CheckIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ScrollIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5" />
    </svg>
  );
}

const categories = [
  { id: 'all', label: 'Websites' },
  { id: 'wordpress', label: 'WordPress Websites' },
  { id: 'coding', label: 'Coding Websites' },
  { id: 'seo', label: 'SEO Performance' },
];

const workItems = [
  /* WordPress Websites */
  {
    id: 'mtadmc-travel',
    title: 'MTA Destination Management',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    domain: 'mtadmc.com',
    image: '/experience/mtadmc_scroll.webp',
    live: 'https://mtadmc.com',
    metric: 'Under 1.4s Load Time',
    tags: ['WordPress', 'Custom Theme', 'Yoast SEO'],
    featuredSeo: true,
  },
  {
    id: 'property-hub-sydney',
    title: 'Property Hub Sydney',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    domain: 'propertyhubsydney.com.au',
    image: '/experience/property_hub_scroll.webp',
    live: 'https://propertyhubsydney.com.au',
    metric: '+35% Lead Inquiries',
    tags: ['WordPress', 'Elementor Pro', 'Lead Funnel'],
  },
  /* Coding Websites */
  {
    id: 'mkr-college',
    title: 'M.K.R. College Official Portal',
    category: 'coding',
    categoryLabel: 'Coding Website',
    domain: 'mkrcollege.com',
    image: '/experience/mkrcollege_scroll.webp',
    live: 'https://mkrcollege.com',
    metric: 'Data Latency <300ms',
    tags: ['React.js', 'Node.js', 'REST APIs'],
  },
  {
    id: 'college-erp',
    title: 'M.K.R. College ERP & Management System',
    category: 'coding',
    categoryLabel: 'ERP System',
    domain: 'college.mkrcollege.com',
    image: '/experience/college_erp_scroll.webp',
    live: 'https://college.mkrcollege.com/site/login',
    metric: '3,200+ Student Records',
    tags: ['PHP / MySQL', 'Role Auth', 'Student Portal'],
  },
  {
    id: 'sukuae-vfx',
    title: 'Sudhakar VFX & Animation Studio',
    category: 'coding',
    categoryLabel: 'Coding Website',
    domain: 'sukuae.in',
    image: '/experience/sukuae_scroll.webp',
    live: 'https://sukuae.in',
    metric: '0 to 150+ in 30 Days',
    tags: ['React.js', 'Dark Glassmorphic', 'WebP'],
    featuredSeo: true,
  },
  {
    id: 'astra-salon',
    title: 'Astra Salon Toronto',
    category: 'coding',
    categoryLabel: 'Coding Website',
    domain: 'astra-five-theta.vercel.app',
    image: '/experience/astra_salon_scroll.webp',
    live: 'https://astra-five-theta.vercel.app/',
    metric: 'Sub-second FCP (0.7s)',
    tags: ['React.js', 'Vite', 'Luxury Branding'],
  },
  {
    id: 'car-detailing',
    title: 'Elite Auto Detailing & Car Spa',
    category: 'coding',
    categoryLabel: 'Coding Website',
    domain: 'car-detailing-demo.vercel.app',
    image: '/experience/car_detailing_scroll.webp',
    live: 'https://car-detailing-demo.vercel.app/',
    metric: '+40% Fast Checkout',
    tags: ['Next.js', 'React', 'Package Builder'],
  },
  {
    id: 'futureforge-ai',
    title: 'FutureForge AI SaaS Platform',
    category: 'coding',
    categoryLabel: 'Coding Website',
    domain: 'futureforge-ai-sage.vercel.app',
    image: '/experience/futureforge_scroll.webp',
    live: 'https://futureforge-ai-sage.vercel.app/',
    metric: 'Instant AI (<400ms)',
    tags: ['React 18', 'Spring Boot', 'MySQL'],
  },

  /* SEO Performance */
  {
    id: 'seo-audit-suite',
    title: '100/100 Core Web Vitals & PageSpeed Suite',
    category: 'seo',
    categoryLabel: 'SEO Performance',
    domain: 'pagespeed.web.dev',
    image: '/experience/seo_performance_scroll.webp',
    live: 'https://mtadmc.com',
    metric: '99/100 PageSpeed & SEO',
    tags: ['Core Web Vitals', '0.5s FCP', '0.9s LCP'],
  },
];

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? workItems
    : activeCategory === 'seo'
      ? workItems.filter((item) => item.category === 'seo' || item.featuredSeo)
      : workItems.filter((item) => item.category === activeCategory);

  return (
    <section className={styles.experienceSection} id="experience">
      {/* Header Section */}
      <motion.div
        className={styles.headerBox}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45 }}
      >
        <span className={styles.tagBadge}>OUR WORK</span>
        <h2 className={styles.heading}>Service-Wise Work</h2>
        <p className={styles.subtitle}>
          Interactive showcases featuring smooth full-page hover scrolling, sub-second performance, and production deployments.
        </p>
      </motion.div>

      {/* Category Filter Tabs Bar */}
      <motion.div
        className={styles.filterBarWrapper}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.filterBar}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterPill} ${isActive ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    className={styles.activePillIndicator}
                    layoutId="activeFilterPill"
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Work Showcase Cards Grid */}
      <motion.div
        className={styles.cardsGrid}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3 }}
              className={styles.cardWrapper}
            >
              <div className={styles.workCard}>
                {/* Browser Frame Header */}
                <div className={styles.browserHeader}>
                  <div className={styles.windowControls}>
                    <span className={`${styles.dot} ${styles.dotRed}`} />
                    <span className={`${styles.dot} ${styles.dotYellow}`} />
                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                  </div>
                  <div className={styles.browserUrl}>
                    <span className={styles.lockIcon}>🔒</span>
                    <span className={styles.urlText}>{item.domain}</span>
                  </div>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickExternal}
                    aria-label={`Open ${item.title} in new tab`}
                    title="Open live site"
                  >
                    <ExternalLinkIcon size={12} />
                  </a>
                </div>

                {/* Interactive Edge-to-Edge Scrollable Mockup Container */}
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mockupViewport}
                  aria-label={`Visit ${item.title}`}
                >
                  <div className={styles.scrollCanvas}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1280}
                      height={2844}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className={styles.scrollImage}
                    />
                  </div>

                  {/* Scroll on hover helper cue */}
                  <div className={styles.scrollBadge}>
                    <ScrollIcon size={11} />
                    <span>Hover to scroll</span>
                  </div>

                  {/* Quick click overlay */}
                  <div className={styles.overlayPill}>
                    <span>Visit Live Site</span>
                    <ExternalLinkIcon size={13} />
                  </div>
                </a>

                {/* Clean, Uniform Card Footer */}
                <div className={styles.cardFooter}>
                  <div className={styles.footerRowTop}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <span className={styles.categoryPill}>
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className={styles.footerRowBottom}>
                    <span className={styles.metricBadge}>
                      <CheckIcon size={11} />
                      <span>{item.metric}</span>
                    </span>

                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveButton}
                    >
                      <span>Live Site</span>
                      <ExternalLinkIcon size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
