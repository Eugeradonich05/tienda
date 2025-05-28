// src/ProdDetails/ProdDesc.js
import { useParams } from 'react-router-dom';
import { products } from '../Data/products';

export default function ProductoDescripcion() {
  const { id } = useParams(); // obtener desde la URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Descripción no disponible</p>;

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Descripción del Producto</h2>
      <p>{product.description}</p>
    </section>
  );
}
