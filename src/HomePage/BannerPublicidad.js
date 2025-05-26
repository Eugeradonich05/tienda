import styles from './BannerPublicidad.module.css';

export default function BannerPublicidad() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Clean Formulas. <br />
          Visible Changes. <br />
          Zero Compromises.
        </h1>
        <p className={styles.description}>
          Luxury skincare rooted in mindfulness and biotechnology.
        </p>
        <a href="#descubrir" className={styles.link}>
          Discover More →
        </a>
      </div>
    </section>
  );
}
