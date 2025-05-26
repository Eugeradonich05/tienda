import React from 'react';
import styles from './ProdMain.module.css';

const ProductReviews = ({ reviews, visible, setVisible }) => (
  <div className={styles.reviews}>
    <button onClick={() => setVisible(!visible)} className={styles.reviewsToggle}>
      {visible ? 'Hide Reviews' : `Reviews (${reviews.length})`}
    </button>
    {visible && (
      <ul className={styles.reviewList}>
        {reviews.map((r, i) => (
          <li key={i}>
            <strong>{r.usuario}:</strong> {r.comentario} {'⭐'.repeat(r.puntuacion)}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ProductReviews;
