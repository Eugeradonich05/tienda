import styles from './Review.module.css';
import { Star } from 'lucide-react';
import img from '../imagenes/perso1.jpg'

const reviews = [
  {
    title: 'My Skin Has Never Felt So Hydrated!',
    text: "I've struggled with dry, flaky skin for years and this product has completely transformed my routine. The hydration lasts all day and gives me a glow I never thought possible.",
    name: 'Emily D.',
    role: 'Health Enthusiast',
    image:  img
  },
  {
    title: 'Bye Breakouts, Hello Glow!',
    text: "I was skeptical, but this product turned everything around. Now I rarely experience breakouts, and my skin looks clearer and more radiant.",
    name: 'Susan T.',
    role: 'Product Tester',
    image:  img
  },
  {
    title: 'Instant Youthful Boost—At 50!',
    text: "Fine lines? Gone. The serum makes my skin feel smoother, tighter, and more youthful. I wish I found this earlier in my skincare journey!",
    name: 'Jane P.',
    role: 'Skincare Enthusiast',
    image: img
  },
];

export default function Review() {
  return (
    <section id='caracteristicas' className={styles.reviewSection}>
      <h2 className={styles.title}>What our customers have to say...</h2>
      <div className={styles.cardsContainer}>
        {reviews.map((review, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />)}
            </div>
            <h3 className={styles.cardTitle}>{review.title}</h3>
            <p className={styles.text}>{review.text}</p>
            <div className={styles.user}>
              <img src={review.image} alt={review.name} className={styles.avatar} />
              <div>
                <p className={styles.name}>{review.name}</p>
                <p className={styles.role}>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
