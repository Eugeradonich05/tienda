import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2 className={styles.logo}>Bonatica</h2>
        <p className={styles.tagline}>Love Your Skin. Every Day.</p>
      </div>
      <div className={styles.right}>
        <a href="#services" className={styles.link}>Services</a>
        <a href="#pricing" className={styles.link}>Pricing</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
