import React from 'react';
import '../../styles/components/details-card.css';

const DetailsCard = (props) => {
  return (
    <div className="container-details ">
      <div className="container-text-details">
        <p className="itemes-details">Parity: </p>
        <p className="value-details-parity">
          {props.coinOne}
          <img src={props.imgOne} alt="logo" width="auto" height="20px;" style={{margin: '7px'}}/>
          -
          <img src={props.imgTwo} alt="logo" width="auto" height="20px;" style={{margin: '7px'}}/>
          {props.coinTwo}
         </p>
      </div>
      <div className="container-text-details">
        <p className="itemes-details">Amount</p>
        <p className="value-details" id="amount">{props.amount}</p>
      </div>
      <div className="container-text-details">
        <p className="itemes-details" >Commisions</p>
        <p className="value-details" id="commisions">{props.Commisions}</p>
      </div>
    </div>
  )
}
export default DetailsCard
