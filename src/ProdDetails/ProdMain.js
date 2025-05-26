import React, { useState } from 'react';
import styles from './ProdMain.module.css';
import img1 from '../imagenes/vela2.jpg';
import img2 from '../imagenes/vela1.jpg';
import img3 from '../imagenes/vela3.jpg';
import ProductoDescripcion from './ProdDesc';

const MainDetail = () => {
  const images = [img1, img2, img3,img1 ];
  const [selectedImage, setSelectedImage] = useState(images[0]);
const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.gallerySection}>
        <div className={styles.mainImageWrapper}>
          <img src={selectedImage} className={styles.mainImage} alt="Producto principal" />
          <button className={styles.zoomButton}>🔍</button>
        </div>
        <div className={styles.thumbnailRow}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className={`${styles.thumbnail} ${selectedImage === img ? styles.selected : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div className={styles.path}>
          HOME / SET / COMPLETELY NOURISHED DRY SKIN CARE
        </div>
      
      </div>

      <div className={styles.infoSection}>
        <h1 className={styles.productTitle}>Completely Nourished Dry Skin Care</h1>
        <div className={styles.priceRow}>
          <span className={styles.oldPrice}>$112.00</span>
          <span className={styles.newPrice}>$99.00</span>
        </div>
        <div className={styles.cartRow}>
  <div className={styles.quantitySelector}>
    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
    <span>{quantity}</span>
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
  </div>
  <button className={styles.addToCart}>ADD TO CART</button>
</div>
          
        
      </div>
    </div>
  );
};

export default MainDetail;
