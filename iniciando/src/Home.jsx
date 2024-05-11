import React from 'react';
import Titulo from './Titulo';
import styles from './Index.module.css';

const Home = () => {
  return (
    <section className={styles.animeLeft}>
      <Titulo texto='Home' />
      <p>Essa é a home.</p>
    </section>
  );
};

export default Home;
