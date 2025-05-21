import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Main</NavLink>
      <NavLink to="/movies" className={styles.link}>The film</NavLink>
    </nav>
  );
}

export default Navigation;
