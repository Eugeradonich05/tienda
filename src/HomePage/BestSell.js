import styles from './BestSell.module.css';
import vela1 from '../imagenes/vela1.jpg'
import vela2 from '../imagenes/vela2.jpg'
import vela3 from '../imagenes/vela3.jpg'
const products = [
  {
    title: "The Glow Revival Set",
    description: "Hydrate + Brighten for Dewy, Resilient Skin",
    price: "£29.99",
    stars: 5,
    image: vela1
  },
  {
    title: "Blemish Rescue System",
    description: "Clear Breakouts & Soothe Angry Skin",
    price: "£22.99",
    stars: 5,
    image: vela2
  },
  {
    title: "Age-Defy Overnight Kit",
    description: "Wake Up to Firmer, Plumper Skin",
    price: "£27.99",
    stars: 5,
    image: vela3
  }
];

export default function BestSell() {
  return (
    <section className={styles.bestSell}>
      <h2 className={styles.title}>Our Best Sellers</h2>
     <div className={`${styles.productsGrid} ${styles.cards}`}>
  {products.map((product, index) => (
    <div key={index} className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.stars}>{"★".repeat(product.stars)}</div>
        <h3 className={styles.name}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}</p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}
