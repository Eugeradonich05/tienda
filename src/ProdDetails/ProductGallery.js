import React from 'react';
import styles from './ProdMain.module.css';

const ProductGallery = ({ imagenes, imagenActual, setImagenActual }) => (
  <div className={styles.gallery}>
    <img src={imagenActual} alt="Principal" className={styles.mainImage} />
    <div className={styles.thumbnailContainer}>
      {imagenes.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Miniatura"
          className={`${styles.thumbnail} ${imagenActual === img ? styles.active : ''}`}
          onClick={() => setImagenActual(img)}
        />
      ))}
    </div>
  </div>
);

export default ProductGallery;
