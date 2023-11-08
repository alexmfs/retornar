import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';

import './CardAcai.scss';

const acai = [
  {
    id: 1,
    tamanho: 'Pequeno',
    ml: '300 ml',
    preco: 'R$ 18',
  },
  {
    id: 2,
    tamanho: 'Médio',
    ml: '500 ml',
    preco: 'R$ 20',
  },
  {
    id: 3,
    tamanho: 'Grande',
    ml: '700 ml',
    preco: 'R$ 22',
  },
];

const CardAcai = ({title, description, image}) => {
  const [value, setValue] = React.useState('R$ 18');
  const [count, setCount] = React.useState(1);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const updateCount = (newCount) => {
    if (newCount >= 1) {
      setCount(newCount);
    }
  };

  return (
    <Card
      title={title}
      description={description}
      image={image}
    >
      <div className="card__options">
        <div className="card__options-header">
          <div>
            <h3 className="card__options-title">Escolha uma fruta</h3>
            <p className="card__options-description">Escolha pelo menos 1 opção.</p>
          </div>
          <div className="card__options-step">1/3</div>
        </div>
        <ul className="card__options-list">
          {acai
            .map((item) => (
              <li key={item.id}>
                <label htmlFor={item.id}>
                  <div>
                    {item.tamanho} {item.ml} 
                  </div>
                  <div className="card__options-list-item">
                    {item.preco}
                    <input 
                      onClick={() => setValue()} 
                      value={item.preco} 
                      name='tamanhos' 
                      id={item.id} 
                      type="radio" 
                      onChange={handleRadioChange}
                      checked={value === item.preco}
                    />
                  </div>
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="card__buttons">
        <Spinner value={count} setCount={updateCount}/>
        <Button variant="primary"><span>Avançar</span><span>R$ {Number(value.replace('R$ ', '')) * count}</span></Button>
      </div>
    </Card>
  )
}




export default CardAcai;