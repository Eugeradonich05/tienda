import { useParams } from 'react-router-dom';
import { products } from '../Data/products';
import styles from './ProdMain.module.css';

export default function ProductoMain() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className={styles.notFound}>Producto no encontrado</p>;

  return (
    <section className={styles.ProdMain}>

    <main className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} className={styles.mainImage} />
        <div className={styles.thumbnailRow}>
          {[product.image, product.image, product.image].map((img, i) => (
            <img key={i} src={img} alt={`thumbnail-${i}`} className={styles.thumbnail} />
          ))}
        </div>
      </div>

    <div className={styles.infoSection}>
  <nav className={styles.breadcrumb}>Inicio / Productos / {product.title}</nav>
  <h1 className={styles.title}>{product.title}</h1>
  <div className={styles.stars}>{"★".repeat(product.stars)}</div>

  <div className={styles.colors}>
    {["#D9BFA9", "#C49E85", "#333"].map((color, i) => (
      <span
        key={i}
        className={styles.colorCircle}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>

  <p className={styles.description}>{product.description}</p>
  <p className={styles.price}>{product.price}</p>

  <div className={styles.buttonRow}>
  <input type="number" min="1" defaultValue="1" className={styles.quantity} />
    <button className={styles.addToBag}>AGREGAR AL CARRITO</button>
  </div>
</div>
    </main>
          </section>
  );
}
