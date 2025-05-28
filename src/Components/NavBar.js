import React, { useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Botanica</div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#acerca">About</a></li>
        <li><a href="#caracteristicas">Reviews</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>
      <a href="#comprar" className={styles.button}>Comprar Ahora</a>

    </nav>
  );
};

export default NavBar;
