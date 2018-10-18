import React, { Component } from 'react';
import RowBoard from '../../components/general/RowBoard';
import DefaultLayout from '../../layouts/DefaultLayout';
import '../../styles/templates/dashboard-new.css';


class DashboardNew extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

    render() {
        return (
          <DefaultLayout history={this.props.history}>
            <div className="total-center" >
              <div className="container-Dashboard-new">
                <p className="title-session text-center" ><span className="title-ligth">Bot </span> Transactions</p>
                <p className="subtitle-session" >Transactions List</p>
                    <div className="container-board">
                        <div className="container-header-board">
                            <p className="text-head-board">Symbol</p>
                            <p className="text-head-board">Name</p>
                            <p className="text-head-board">%changes 24h</p>
                            <p className="text-head-board">Last</p>
                            <p className="text-head-board">Bid</p>
                            <p className="text-head-board">Ask</p>
                            <p className="text-head-board">Volume</p>
                            <p className="text-head-board">$Volume</p>
                            <p className="text-head-board">Avg Tx Vol 60s</p>
                            <p className="text-head-board">Avg Tx Vol 1hr</p>
                            <p className="text-head-board">Avg Tx Vol 6hr</p>
                            <p className="text-head-board">Avg Tx Vol 6hr</p>
                            <p className="text-head-board">Avg Tx Vol 12hr</p>
                            <p className="text-head-board">Avg Tx Vol 24hr</p>
                            <p className="text-head-board">R/V</p>
                        </div>
                        <RowBoard />
                        <RowBoard />
                        <RowBoard />
                        <RowBoard />
                        <RowBoard />
                    </div>
              </div>
            </div>
          </DefaultLayout>
        )
    }
}
export default DashboardNew
