import React from 'react';
import styles from './ProdMain.module.css';

const ProductInfo = ({ producto }) => (
  <>
    <h1 className={styles.title}>{producto.titulo}</h1>
    <p className={styles.price}>
      <span className={styles.oldPrice}>${producto.precioOriginal}</span>
      <span className={styles.newPrice}>${producto.precioActual}</span>
    </p>
    <button className={styles.addToCart}>ADD TO CART</button>
  </>
);

export default ProductInfo;
