import React from 'react';
import styles from './Presentation.module.css';
import { FlaskConical, UserCheck2, Eye, Globe2 } from 'lucide-react';
import imagen from '../imagenes/descr.png'

const Presentation = () => {
  return (
    <section id='acerca' className={styles.presentation}>
      <div className={styles.container}>

        {/* Título arriba centrado */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why Our Skincare is Good for You – And Your Skin
          </h2>
          <p className={styles.description}>
            At Bonatica, we believe skincare should be as effective as it is healthy—backed by science, free from harmful ingredients, and designed to nourish your skin for the long term.
          </p>
        </div>

        {/* Cuerpo con imagen y texto */}
        <div className={styles.body}>
          <div className={styles.features}>
            <ul className={styles.featureList}>
              <li>
                <div>
                  <strong>Clean, Science-Backed Formulas</strong>
                  <p>Crafted with clinically proven ingredients that deliver real results.</p>
                </div>
              </li>

              <li>
                <div>
                  <strong>Dermatologist-Tested & Skin-Loving</strong>
                  <p>Designed to soothe irritation, balance oil production, and protect skin.</p>
                </div>
              </li>

              <li>
                <div>
                  <strong>Visible Results You Can Trust</strong>
                  <p>"My acne scars faded in 2 weeks!" – Jane Evans</p>
                </div>
              </li>

              <li>
                <div>
                  <strong>Good for Your Skin, Good for the Planet</strong>
                  <p>Recyclable packaging & cruelty-free – Certified by Leaping Bunny.</p>
                </div>
              </li>
            </ul>

            <button className={styles.ctaButton}>Order Now</button>
          </div>

              

          <div className={styles.imageWrapper}>
  <div className={styles.effect}></div>
  <img
    src={imagen}
    alt="Bonatica Product"
    className={styles.productImage}
  />
</div>

              </div>

      </div>
    </section>
  );
};

export default Presentation;
