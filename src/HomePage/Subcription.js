import React from 'react';
import styles from './Subcription.module.css';

const Subcription = () => {
  return (
    <section id='contacto' className={styles.subcriptionSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Subscribe to our newsletter</h2>
        <p className={styles.description}>
          Subscribe to our newsletter and become part of a community that believes in radiant skin and radiant planet.
        </p>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Enter your email here" className={styles.input} />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subcription;
