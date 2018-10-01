import React from 'react';
import moment from 'moment'
import '../../styles/components/card.css';

const Card = (props) => {

  return (
    <div history={props.history}>
      <div className="container-card opacity"onClick={()=>props.history.push('/details-transactions/'+props.id)}>
        <div className="container-text-card">
          <p className="itemes-card">ID: </p>
          <p className="value-card" id="id">{props.id}</p>
        </div>
        <div className="container-text-card">
          <p className="itemes-card">Creation Data: </p>
          <p className="value-card">{moment(props.creationData).format('YYYY/MM/DD')}</p>
        </div>
        <div className="container-text-card">
          <p className="itemes-card">Investment: </p>
          <p className="value-card" id="Investment">
            { new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(props.investment)}
      </p>
        </div>
        <div className="container-text-card">
          <p className="itemes-card">Earnings: </p>
          <p className="value-card" id="earnings">
              { new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(props.earnings)}
        </p>
        </div>
    </div>
    </div>
  )
}
export default Card
