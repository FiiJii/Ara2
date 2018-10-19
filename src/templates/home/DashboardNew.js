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
                          <RowBoard 
                            headtext1="Symbol"
                            boddyText1="ETH - USDT"
                            headtext2="Name"
                            boddyText2="Ethereum"
                            headtext3="%changes 24h"
                            boddyText3="-0.73"
                            headtext4="Last"
                            boddyText4="450.55"
                            headtext5="Bid"
                            boddyText5="449.85"
                            headtext6="Ask"
                            boddyText6="451.25"
                            headtext7="Volume"
                            boddyText7="125,000"
                            headtext8="$Volume"
                            boddyText8="$56.000.000"
                            headtext9="Avg Tx Vol 60s"
                            boddyText9="$258.33"
                            headtext10="Avg Tx Vol 1hr"
                            boddyText10="$214.85"
                            headtext11="Avg Tx Vol 6hr"
                            boddyText11="$314.39"
                            headtext12="Avg Tx Vol 6hr"
                            boddyText12="$387.22"
                            headtext13="Avg Tx Vol 12hr"
                            boddyText13="$186.19"
                            headtext14="Avg Tx Vol 24hr"
                            boddyText14="$349.76"
                            headtext15="R/V"
                            boddyText15='red'
                          />
                      <RowBoard
                        headtext1="Symbol"
                        boddyText1="ETH - USDT"
                        headtext2="Name"
                        boddyText2="Ethereum"
                        headtext3="%changes 24h"
                        boddyText3="-0.73"
                        headtext4="Last"
                        boddyText4="450.55"
                        headtext5="Bid"
                        boddyText5="449.85"
                        headtext6="Ask"
                        boddyText6="451.25"
                        headtext7="Volume"
                        boddyText7="125,000"
                        headtext8="$Volume"
                        boddyText8="$56.000.000"
                        headtext9="Avg Tx Vol 60s"
                        boddyText9="$258.33"
                        headtext10="Avg Tx Vol 1hr"
                        boddyText10="$214.85"
                        headtext11="Avg Tx Vol 6hr"
                        boddyText11="$314.39"
                        headtext12="Avg Tx Vol 6hr"
                        boddyText12="$387.22"
                        headtext13="Avg Tx Vol 12hr"
                        boddyText13="$186.19"
                        headtext14="Avg Tx Vol 24hr"
                        boddyText14="$349.76"
                        headtext15="R/V"
                        boddyText15="red"
                      />
                      <RowBoard
                        headtext1="Symbol"
                        boddyText1="ETH - USDT"
                        headtext2="Name"
                        boddyText2="Ethereum"
                        headtext3="%changes 24h"
                        boddyText3="-0.73"
                        headtext4="Last"
                        boddyText4="450.55"
                        headtext5="Bid"
                        boddyText5="449.85"
                        headtext6="Ask"
                        boddyText6="451.25"
                        headtext7="Volume"
                        boddyText7="125,000"
                        headtext8="$Volume"
                        boddyText8="$56.000.000"
                        headtext9="Avg Tx Vol 60s"
                        boddyText9="$258.33"
                        headtext10="Avg Tx Vol 1hr"
                        boddyText10="$214.85"
                        headtext11="Avg Tx Vol 6hr"
                        boddyText11="$314.39"
                        headtext12="Avg Tx Vol 6hr"
                        boddyText12="$387.22"
                        headtext13="Avg Tx Vol 12hr"
                        boddyText13="$186.19"
                        headtext14="Avg Tx Vol 24hr"
                        boddyText14="$349.76"
                        headtext15="R/V"
                        boddyText15='green'
                      />
                      <RowBoard
                        headtext1="Symbol"
                        boddyText1="ETH - USDT"
                        headtext2="Name"
                        boddyText2="Ethereum"
                        headtext3="%changes 24h"
                        boddyText3="-0.73"
                        headtext4="Last"
                        boddyText4="450.55"
                        headtext5="Bid"
                        boddyText5="449.85"
                        headtext6="Ask"
                        boddyText6="451.25"
                        headtext7="Volume"
                        boddyText7="125,000"
                        headtext8="$Volume"
                        boddyText8="$56.000.000"
                        headtext9="Avg Tx Vol 60s"
                        boddyText9="$258.33"
                        headtext10="Avg Tx Vol 1hr"
                        boddyText10="$214.85"
                        headtext11="Avg Tx Vol 6hr"
                        boddyText11="$314.39"
                        headtext12="Avg Tx Vol 6hr"
                        boddyText12="$387.22"
                        headtext13="Avg Tx Vol 12hr"
                        boddyText13="$186.19"
                        headtext14="Avg Tx Vol 24hr"
                        boddyText14="$349.76"
                        headtext15="R/V"
                        boddyText15='green'
                      />
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

export default DashboardNew
