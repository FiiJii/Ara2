import React, { Component } from 'react';
import Header from '../components/header';

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout;
