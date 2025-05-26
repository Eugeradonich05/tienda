import React from 'react';
import styles from './ProdDesc.module.css';

const productos = [
  {
    descripcion: 'Vela aromática de lavanda ideal para momentos de relajación.',
    caracteristicas: [
      { key: 'Peso', value: '200g' },
      { key: 'Duración', value: '40 horas' },
      { key: 'Altura', value: '10 cm' }
    ]
  },
  {
    descripcion: 'Vela de soja con aroma a vainilla. Perfecta para ambientar tu hogar.',
    caracteristicas: [
      { key: 'Peso', value: '150g' },
      { key: 'Duración', value: '30 horas' },
      { key: 'Color', value: 'Beige' }
    ]
  },
  {
    descripcion: 'Vela decorativa con esencia cítrica. Ideal para regalar.',
    caracteristicas: [
      { key: 'Peso', value: '250g' },
      { key: 'Duración', value: '50 horas' },
      { key: 'Presentación', value: 'En frasco de vidrio' }
    ]
  }
];

const ProductoDescripcion = () => {
  return (
    <section className={styles.descripcionContainer}>
      <h2 className={styles.title}>Descripción del producto</h2>
    <section className={styles.gridContainer}>
      {productos.map((producto, index) => (
        <article key={index} className={styles.card}>
          <p className={styles.descripcion}>{producto.descripcion}</p>
          <ul className={styles.lista}>
            {producto.caracteristicas.map((carac, idx) => (
              <li key={idx} className={styles.item}>
                <span className={styles.key}>{carac.key}</span>
                <span className={styles.value}>{carac.value}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
    </section>

  );
};

export default ProductoDescripcion;
