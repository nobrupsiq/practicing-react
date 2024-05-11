import React from 'react';
import styles from './Index.module.css';

const Produto = ({ nome, caracteristicas }) => {
  return (
    <section className={styles.produto}>
      <p>{nome}</p>
      {caracteristicas.map((caracteristica) => (
        <li key={caracteristica}>{caracteristica}</li>
      ))}
    </section>
  );
};

export default Produto;
