import React from 'react';
import '../../styles/components/row-board.css';

const RowBoard = (props) => {

  return (
    <div className="container-row-board " onClick={()=>props.history.push('/details-transactions/'+props.id)}>
      <div className="container-text-row-board">
        <p className="itemes-row-board">Symbol: </p>
        <p className="value-row-board" >ETH - USDT</p>
      </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Name: </p>
              <p className="value-row-board" >Ethereum</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">%changes 24h: </p>
              <p className="value-row-board" >-0.73</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Last: </p>
              <p className="value-row-board" >450.55</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Bid: </p>
              <p className="value-row-board" >449.85</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Ask: </p>
              <p className="value-row-board" >451.25</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Volume: </p>
              <p className="value-row-board" >125,000</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">$Volume: </p>
              <p className="value-row-board" >$56.000.000</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Avg Tx Vol 60s: </p>
              <p className="value-row-board" >$258.33</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Avg Tx Vol 1hr: </p>
              <p className="value-row-board" >$214.85</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Avg Tx Vol 6hr: </p>
              <p className="value-row-board" >$314.39</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Avg Tx Vol 6hr:</p>
              <p className="value-row-board" >$387.22</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Avg Tx Vol 12hr:</p>
              <p className="value-row-board" >$186.19</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">Avg Tx Vol 24hr:</p>
              <p className="value-row-board" >$349.76</p>
          </div>
          <div className="container-text-row-board">
        <p className="itemes-row-board">R/V</p>
        <p className="value-row-board" >rojo</p>
      </div>

    </div>
  )
}
export default RowBoard
