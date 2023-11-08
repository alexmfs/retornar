import React from 'react';
import './Card.scss';

const Card = ({title, description, image, children}) => {

  return (
    <div className="card">
      <div className="card__image">
        <img src={image}/>
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <div className="card__rating">
          <img src="./assets/estrela.svg"/>
          <div className="card__rating-note">4.5</div>
          <div className="card__rating-qtd">(30)</div>
          <a href="" className="card__rating-details">Ver Avaliações</a>
        </div>
        <p className="card__description">{description}</p>
        
        {children}

      </div>
    </div>
  )
}

export default Card
