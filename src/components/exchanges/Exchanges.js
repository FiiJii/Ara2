import React, { Component } from 'react';
import '../../styles/templates/dashboard-new.css';

class exchanges extends Component {
  constructor(props) {
    super(props)
    this.state= {
      stateclassexchange: true,
    }
  }

  render() {
    return (
      <div className="container-board">
        <div className="container-header-board">
          <p className="text-head-board">Okex</p>
            <button className={this.state.stateclassexchange === true ? 'button-active-ex' : 'button-desactive-ex'}
            onClick={() => this.setState({ stateclassexchange: !this.state.stateclassexchange })}/>
        </div>
      </div>
    )
  }
}

export default exchanges;
