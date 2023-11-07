import React from 'react';
import "./global/reset.scss";
import "./app.scss";

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Container from './components/Container/Container';

const App = () => {

  return (
    <div id="app">
      <Header />
      <Container>
        <Card />
      </Container>
    </div>
  );
};

export default App