import React from 'react';
import Titulo from './Titulo';
import styles from './Index.module.css';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', caracteristicas: ['4gb', '240gb'] },
    { nome: 'Smartphone', caracteristicas: ['8gb', '500gb'] },
    { nome: 'Maquina de lavar', caracteristicas: ['10kg', '110Wts'] },
  ];

  return (
    <section className={styles.animeLeft}>
      <Titulo texto='Produtos' />
      {produtos.map((produto, nome) => (
        <Produto key={nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
