import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Change this key when updating the promo to show it again to users who dismissed it
const OPENCLAW_PROMO_DISMISSED_KEY = 'openclaw-promo-dismissed-v1';

export function OpenClawPromo(): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage to see if promo was dismissed
    const isDismissed = localStorage.getItem(OPENCLAW_PROMO_DISMISSED_KEY);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(OPENCLAW_PROMO_DISMISSED_KEY, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.promoContainer} role="complementary" aria-label="OpenClaw announcement">
      {/* Animated background elements */}
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.clawMarks} aria-hidden="true">
        <div className={styles.clawMark} />
        <div className={styles.clawMark} />
        <div className={styles.clawMark} />
      </div>
      
      <div className={styles.promoContent}>
        {/* Trending badge */}
        <div className={styles.trendingBadge}>
          <span className={styles.trendingDot} aria-hidden="true" />
          <span>Trending</span>
        </div>
        
        {/* Main headline */}
        <h2 className={styles.headline}>
          <span className={styles.headlinePrefix}>Introducing</span>
          <span className={styles.openClawText}>OpenClaw</span>
        </h2>
        
        {/* Description */}
        <p className={styles.description}>
          The open-source AI agent framework powering the next generation of autonomous coding. 
          Now available for everyone to build, extend, and customize.
        </p>
        
        {/* CTA buttons */}
        <div className={styles.ctaContainer}>
          <a
            href="https://github.com/RooCodeInc/OpenClaw?utm_source=docs&utm_medium=promo&utm_campaign=openclaw_launch"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Explore on GitHub
          </a>
          <a
            href="/features/openclaw?utm_source=docs&utm_medium=promo&utm_campaign=openclaw_launch"
            className={styles.secondaryCta}
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Dismiss button */}
      <button
        className={styles.dismissButton}
        onClick={handleDismiss}
        aria-label="Dismiss OpenClaw announcement"
        type="button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

export default OpenClawPromo;
