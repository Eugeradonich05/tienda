import React from 'react';
import styles from './Hero.module.css';
import productImg from '../imagenes/VelaPrincipal.png'; // Usá la imagen real del producto

const Hero = () => {
  return (
    <section id='inicio' className={styles.hero}>
      <div  className={styles.decorativeBackground}></div>
      <div className={styles.decorativeBackground1}></div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Love Your Skin, Every Day y algo mas</h1>
          <p>
            Elevate Your Glow with Clean, Science-Backed Skincare — Cruelty-Free, Sustainable,
            and Packed with Antioxidants for Skin That Looks Healthy at Every Age.
          </p>
          <div className={styles.buttons}>
            <a href="#order" className={styles.orderButton}>Order Now ↗</a>
            <a href="#info" className={styles.infoButton}>Find Out More</a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={productImg} alt="Bonatica Skincare" />
        </div>
      </div>
    </section>
  );
};

export default Hero;