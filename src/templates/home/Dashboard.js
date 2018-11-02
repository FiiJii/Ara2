import React, { Component } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import Pairs from '../../components/general/Pairs';
import Transactions from '../../components/general/Transactions';
import { connect } from 'react-redux';

import '../../styles/templates/dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <DefaultLayout history={this.props.history}>
        <div className="total-center" >
          <div className="container-dashboard-new">
            <p className="title-session text-center" ><span className="title-ligth">Bot </span> Transactions</p>
            <Tab>
              <Pairs/>
              <Transactions/>
            </Tab>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="box-titles-tabs-items">
            <p className={this.state.tab === 1 ? 'title-tab-on title-tab' : 'title-tab' }
              onClick={() => this.setState({ tab: 1 })}>Parities Average</p>
            <p className={this.state.tab === 2 ? 'title-tab-on title-tab' : 'title-tab'}
              onClick={() => this.setState({ tab: 2 })}>Transactions List</p>
          </div>
          {
            this.state.tab === 1 ?
              <div>
                {this.props.children[0]}
              </div>
            :
              this.state.tab === 2 ?
                <div>
                  {this.props.children[1]}
                </div>
            :
            null
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
