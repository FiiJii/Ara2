import React, { Component } from 'react';
import Card from '../../components/general/Card';
import Header from '../../components/general/Header';
import Details from './details.json'
import { transactions } from '../../ducks/dashboard';
import { connect } from 'react-redux';

import '../../styles/templates/dashborad.css';


class Dashborad extends Component {
  constructor(props){
    super(props)
    this.state={
      transactions: [],
      load: true
    }
  }
  componentWillMount(){
    this.setState({load: true})
    this.props.transactions(this.transactionsList)
  }

  transactionsList = (bool, transactionsValue, message) => {
    if (bool) {
      console.log(bool);
      console.log(transactionsValue);
      this.setState({transactions: transactionsValue.results, load: false})
    }
    console.log('lista',transactionsValue);
  }
    render() {
        return (
          <div history={this.props.history}>
            <Header history={this.props.history}/>
            <div className="total-center" >
            <div className="container-dashborad">
              <p className="title-session text-center" ><span className="title-ligth">Bot </span> Transactions</p>
              <p className="subtitle-session" >Transactions List</p>
              <div className="header-titles-dashborad">
                <p className="header-value-details">ID </p>
                <p className="header-value-details">Creation Data </p>
                <p className="header-value-details">Investment </p>
                <p className="header-value-details">Earnings </p>
              </div>
              <div className="grid-dashborad">
                {
                  this.state.transactions ?
                  this.state.transactions.map((items, key) =>{
                    return(
                      <div key={key}>
                        <Card
                          id={items.id}
                          creationData={items.creation_date}
                          investment={items.investment}
                          earnings={items.earnings}
                          history={this.props.history}/>
                      </div>
                    )
                  }) : null
                }
              </div>;
            </div>
          </div>
          </div>
        )
    }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}
export default connect(mapStateToProps,{ transactions })(Dashborad)
