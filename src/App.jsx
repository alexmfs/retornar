import React from 'react';
import "./global/reset.scss";
import "./app.scss";

import Header from './components/Header/Header';
import CardAcai from './components/CardAcai/CardAcai';
import Container from './components/Container/Container';

const App = () => {

  return (
    <div id="app">
      <Header />
      <Container>
        <CardAcai
          title="Açaí Natural"
          description="Super Copo de 500 ml de Açaí Tradicional - Atenção: Contém somente açaí puro! Ideal para quem gosta de aproveitar um açaí puro ou rechear do seu jeito! Obs: não trocamos nem adicionamos itens a esse copo!"
          image="./assets/acai.jpg"
        >
        </CardAcai>
      </Container>
    </div>
  );
};

export default App