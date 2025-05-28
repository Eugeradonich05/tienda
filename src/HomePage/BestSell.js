// src/components/BestSell.jsx
import { Link } from 'react-router-dom';
import { products } from '../Data/products';
import styles from './BestSell.module.css';

export default function BestSell() {
  return (
    <section className={styles.SectionBest}>

    <section className={styles.bestSell}>
      <h2 className={styles.title}>Más Vendidos</h2>
      <div className={styles.productGrid}>
        {products.map(product => (
          <Link to={`/producto/${product.id}`} key={product.id} className={styles.card}>
            {/* Parte frontal - Imagen */}
            <img src={product.image} alt={product.title} className={styles.cardImage} />

            {/* Parte trasera - Info al hacer hover */}
            <div className={styles.cardContent}>
              <p className={styles.cardTitle}>{product.title}</p>
              <p className={styles.cardDescription}>{product.description}</p>
              <p className={styles.price}>{product.price}</p>
              <div className={styles.stars}>{"★".repeat(product.stars)}</div>
            </div>
          </Link>
        ))}
      </div>
        </section>
    </section>
  );
}
