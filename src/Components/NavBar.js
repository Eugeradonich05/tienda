import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav  className={styles.navbar}>
      <div className={styles.logo}>
          Botanica
     </div>
      <ul className={styles.navLinks}>
        <li><a href="#inicio">Home</a></li>
        <li><a href="#acerca">About</a></li>
        <li><a href="#caracteristicas">Reviews</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>
      <a href="#comprar" className={styles.button}>Comprar Ahora</a>
      
    </nav>
  );
};

export default NavBar;
