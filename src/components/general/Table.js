import React from 'react';
import '../../styles/components/card.css';

const Table = ({id, symbol, name, handleClick}) => {
  return (
    <div className="container-card opacity">
      <div className="container-text-card">
        <p className="itemes-card">Coin: </p>
        <p className="value-card" symbol="symbol">{symbol}</p>
      </div>
      <div className="container-text-card">
        <p className="itemes-card">name: </p>
        <p className="value-card" name="symbol">{name}</p>
      </div>
      <div className="container-text-card">
        <button
            type="button"
            className="button-remove"
            value={id}
            onClick={handleClick}
          >
            Remove
        </button>
      </div>
    </div>
  )
}

export default Table
