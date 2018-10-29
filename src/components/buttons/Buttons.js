import React, { Component } from 'react';
import '../../styles/templates/dashboard-new.css';

class buttons extends Component {
  constructor(props) {
    super(props)
    this.state= {
      stateclassusdt: true,
      stateclassbtc: true,
      stateclassltc: true,
      stateclasseth: true,
      stateclassall: true,
      filter: ["/api/config/currency/averages/?coins=usdt",
               "/api/config/currency/averages/?coins=btc",
               "/api/config/currency/averages/?coins=ltc",
               "/api/config/currency/averages/?coins=eth",
              ],
    }
  }

  render() {
    return (
      <div className="container-header-board">
        <button className={this.state.stateclassusdt === true ? 'button-active' : 'button-desactive'}
        onClick={() => this.setState({ stateclassusdt: !this.state.stateclassusdt })}>
          USDT
        </button>
        <button className={this.state.stateclassbtc === true ? 'button-active' : 'button-desactive'}
        onClick={() => this.setState({ stateclassbtc: !this.state.stateclassbtc })}>
          BTC
        </button>
        <button className={this.state.stateclassltc === true ? 'button-active' : 'button-desactive'}
        onClick={() => this.setState({ stateclassltc: !this.state.stateclassltc })}>
          LTC
        </button>
        <button className={this.state.stateclasseth === true ? 'button-active' : 'button-desactive'}
        onClick={() => this.setState({ stateclasseth: !this.state.stateclasseth })}>
          ETH
        </button>
        <button className={this.state.stateclassall === true ? 'button-active' : 'button-desactive'}
        onClick={() => this.setState({ stateclassall: !this.state.stateclassall })}>
          ALL
        </button>
      </div>
    )
  }

}

export default buttons;
