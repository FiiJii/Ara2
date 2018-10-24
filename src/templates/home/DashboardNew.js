import React, { Component } from 'react'
import RowBoard from '../../components/general/RowBoard'
import DefaultLayout from '../../layouts/DefaultLayout'
import { connect } from 'react-redux'
import { newTransactions } from '../../ducks/dashboard';

import '../../styles/templates/dashboard-new.css'

class DashboardNew extends Component {
  constructor(props){
    super(props)
    this.state={
      transactionList: []
    }
  }

  componentWillMount(){
    //this.setState({load: true})
    this.props.newTransactions(this.transactionsList,this.state.page)
  }

  transactionsList = (bool, transactionsValue, message) => {
    if(bool) {
        console.log(transactionsValue)
        this.setState({
          "transactionList": transactionsValue
        })
    }


  }

    render() {
        return (
          <DefaultLayout history={this.props.history}>
            <div className="total-center" >
              <div className="container-Dashboard-new">
                <p className="title-session text-center" ><span className="title-ligth">Bot </span> Transactions</p>
                <p className="subtitle-session" >Transactions List</p>
                  <Tab>
                    <div>
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
                          {
                            this.state.transactionList.map((item) =>{
                              return (
                                <RowBoard
                                  headtext1="Symbol"
                                  boddyText1= { item.symbol }
                                  headtext2="Name"
                                  boddyText2={item.name}
                                  headtext3="%changes 24h"
                                  boddyText3={ new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.average_tx_last_24hours)}
                                  headtext4="Last"
                                  boddyText4={item.last}
                                  headtext5="Bid"
                                  boddyText5={item.bid}
                                  headtext6="Ask"
                                  boddyText6='-'
                                  headtext7="Volume"
                                  boddyText7={ new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.volume)}
                                  headtext8="$Volume"
                                  boddyText8="-"
                                  headtext9="Avg Tx Vol 60s"
                                  boddyText9= { new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.average_tx_last_60second)}
                                  headtext10="Avg Tx Vol 1hr"
                                  boddyText10={ new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.average_tx_last_hour)}
                                  headtext11="Avg Tx Vol 6hr"
                                  boddyText11={ new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.average_tx_last_6hours)}
                                  headtext13="Avg Tx Vol 12hr"
                                  boddyText13={ new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.average_tx_last_12hours)}
                                  headtext14="Avg Tx Vol 24hr"
                                  boddyText14={ new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                  }).format(item.average_tx_last_24hours)}
                                  headtext15="R/V"
                                  boddyText15="red"
                                />
                              )
                            })
                          }

                      </div>
                    </div>
                    <div>
                    <div className="container-board">
                      <div className="container-header-board">
                        <p className="text-head-board">Time</p>
                        <p className="text-head-board">Symbol</p>
                        <p className="text-head-board">Name</p>
                        <p className="text-head-board">TX Ref ID</p>
                        <p className="text-head-board">$ Action</p>
                        <p className="text-head-board">Tx Size (Amount)</p>
                        <p className="text-head-board">Profit</p>
                        <p className="text-head-board">Fees</p>
                      </div>
                      <RowBoard
                        headtext1="Time"
                        boddyText1="15:56:23.812"
                        headtext2="Symbol"
                        boddyText2="ETH / USDT"
                        headtext3="Name"
                        boddyText3="Ethereum"
                        headtext4="TX Ref ID"
                        boddyText4=""
                        headtext5="$ Action"
                        boddyText5=""
                        headtext6="Tx Size (Amount)"
                        boddyText6=""
                        headtext7="Profit"
                        boddyText7=""
                        headtext8="Fees"
                        boddyText8=""
                      />
                      <RowBoard
                        headtext1="Time"
                        boddyText1="15:56:23.812"
                        headtext2="Symbol"
                        boddyText2="ETH / BTC"
                        headtext3="Name"
                        boddyText3="Ethereum"
                        headtext4="TX Ref ID"
                        boddyText4=""
                        headtext5="$ Action"
                        boddyText5=""
                        headtext6="Tx Size (Amount)"
                        boddyText6=""
                        headtext7="Profit"
                        boddyText7=""
                        headtext8="Fees"
                        boddyText8=""
                      />
                      <RowBoard
                        headtext1="Time"
                        boddyText1="15:56:23.812"
                        headtext2="Symbol"
                        boddyText2="ETH / USDT"
                        headtext3="Name"
                        boddyText3="Ethereum"
                        headtext4="TX Ref ID"
                        boddyText4=""
                        headtext5="$ Action"
                        boddyText5=""
                        headtext6="Tx Size (Amount)"
                        boddyText6=""
                        headtext7="Profit"
                        boddyText7=""
                        headtext8="Fees"
                        boddyText8=""
                      />
                      <RowBoard
                        headtext1="Time"
                        boddyText1="15:56:23.812"
                        headtext2="Symbol"
                        boddyText2="ETH / BTC"
                        headtext3="Name"
                        boddyText3="Ethereum"
                        headtext4="TX Ref ID"
                        boddyText4=""
                        headtext5="$ Action"
                        boddyText5=""
                        headtext6="Tx Size (Amount)"
                        boddyText6=""
                        headtext7="Profit"
                        boddyText7=""
                        headtext8="Fees"
                        boddyText8=""
                      />
                    </div>
                  </div>
                  </Tab>
              </div>
            </div>
          </DefaultLayout>
        )
    }
}

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 1,
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="box-titles-tabs">
            <p className={this.state.tab === 1 ? 'title-tab-on title-tab' : 'title-tab' } onClick={() => this.setState({ tab: 1 })}>Tab1</p>
            <p className={this.state.tab === 2 ? 'title-tab-on title-tab' : 'title-tab'} onClick={() => this.setState({ tab: 2 })}>Tab2</p>
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
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {  }
}
export default connect(mapStateToProps, { newTransactions })(DashboardNew)
