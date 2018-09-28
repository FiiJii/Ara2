import React, { Component } from 'react';
import DetailsCard from '../../components/general/DetailsCard';
import Header from '../../components/general/Header';
import Details from './details.json'
import { details } from '../../ducks/dashboard';
import { connect } from 'react-redux';
import '../../styles/templates/details-transactions.css';

class DetailsTransactions extends Component {
  constructor(props){
    super(props)
    this.state={
      details: []
    }
  }
  componentWillMount(){
    this.setState({load: true})
    this.props.details((  res ) => {
    if (res.success) {
      this.setState({details: res.data.results})
    }
    },this.props.match.params.id)
  }


    render() {
      console.log(this.props.match.params.id);
        return (
          <div history={this.props.history}>
            <Header history={this.props.history}/>
            <div className="total-center">
              <div className="container-details-transactions">
                <p className="title-session text-center" ><span className="title-ligth">Bot </span> Transactions</p>
                <p className="subtitle-session" >Details Transactions<br/> <span className="details-id">#123</span></p>
                <div className="header-titles-details">
                  <p className="header-value-details">Parity: </p>
                  <p className="header-value-details">Amount</p>
                  <p className="header-value-details">Commisions</p>
                </div>
                <div className="grid-details">
                  {
                    this.state.details.map((detail, key) =>{
                      let paritiSPL = detail.parity.split('_')
                      return(
                        <DetailsCard
                          coinOne={detail.coinOne}
                          imgOne={'../assets/images/'+paritiSPL[0]+'.png'}
                          imgTwo={'../assets/images/'+paritiSPL[1]+'.png'}
                          coinTwo={detail.coinTwo}
                          amount={detail.amount}
                          Commisions={detail.Commisions}
                          />
                      )
                    })
                  }

                </div>
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
export default connect(mapStateToProps,{ details })(DetailsTransactions)
