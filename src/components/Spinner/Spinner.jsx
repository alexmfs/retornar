import React from 'react';
import './Spinner.scss';


const Spinner = ({value, setCount}) => {

  return (
    <div className="spinner">
      <button onClick={() => setCount(value - 1)}>-</button>
      {value}
      <button onClick={() => setCount(value + 1)}>+</button>
    </div>
  )
}

export default Spinner
