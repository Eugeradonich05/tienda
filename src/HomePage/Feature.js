import React from 'react';
import styles from './Feature.module.css';
import { Star } from 'lucide-react';

const Feature = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureContainer}>
        <div className={styles.featureItem}>
          <p className={styles.featureTitle}>Trusted by over 10,000+<br />clients worldwide since 2018.</p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.rating}>
            <span className={styles.ratingNumber}>4.6</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
              ))}
            </div>
            <p className={styles.subText}>3,500 ratings</p>
          </div>
        </div>

        <div className={styles.featureItem1}>
          <p className={styles.featureNumber}>2M</p>
          <p className={styles.subText1}>Worldwide products sold per year.</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
