import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import '../../styles/components/details-card.css';

const DetailsCard = (props) => {
  return (
    <div className="container-details ">
      <div className="container-text-details">
        <p className="itemes-details">Parity: </p>
        <div className="value-details-parity">
          <p className="name-coin-responsive" >{props.coinOne}</p>
          <Tooltip title={props.coinOne} placement="left-start">
            <img src={props.imgOne} alt="logo" width="auto" height="20px" className="opacity" />
          </Tooltip>
          -
          <Tooltip title={props.coinTwo} placement="right-start">
            <img src={props.imgTwo} alt="logo" width="auto" height="20px" className="opacity" />
          </Tooltip>
          <p className="name-coin-responsive" >{props.coinTwo}</p>
         </div>
      </div>
      <div className="container-text-details">
        <p className="itemes-details">Amount</p>
        <p className="value-details" id="amount">
          { new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(props.amount)}
        </p>
      </div>
      <div className="container-text-details">
        <p className="itemes-details" >Commisions</p>
        <p className="value-details" id="commisions">
          { new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(props.Commisions)}
        </p>
      </div>
    </div>
  )
}
export default DetailsCard
