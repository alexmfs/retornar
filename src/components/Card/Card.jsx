import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src="./assets/acai.jpg" alt="" />
      </div>
      <div className="card__content">
        <h2 className="title">
          Açaí Natural
        </h2>
        <p>Super Copo de 500 ml de Açaí Tradicional - Atenção: Contém somente açaí puro! Ideal para quem gosta de aproveitar um açaí puro ou rechear do seu jeito! Obs: não trocamos nem adicionamos itens a esse copo!</p>
      </div>
    </div>
  )
}

export default Card
