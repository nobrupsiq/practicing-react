import React from 'react';
import Home from './Home';
import Produtos from './Produtos';
import Header from './Header';

function App() {
  const { pathname } = window.location;

  let Rota;
  if (pathname === '/produtos') {
    Rota = Produtos;
  } else {
    Rota = Home;
  }

  return (
    <>
      <Header />
      <Rota />
    </>
  );
}

export default App;
