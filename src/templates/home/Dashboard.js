import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import Pairs from '../../components/general/Pairs';
import Tabs from '../../components/tabs';
import Title from '../../components/general/Title';
import Transactions from '../../components/general/Transactions';
import { connect } from 'react-redux';
import { actions as botActions } from '../../containers/Bots/store';
import { actions as botCurrencyActions } from '../../containers/BotCurrencies/store';

const coinMapper = coin => {
  return coin.name ? coin.name : Object.keys(coin)[0]
};
const coinFilter = coin => {
  return coin.status ? coin.status : coin[Object.keys(coin)[0]];
};

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bot: {},
      currencies: [],
      currenciesList: [],
      fetchingBot: false,
    };
  }

  fetchBots = () => {
    this.props.fetchBots(null, {query: {paginate: false}});
  }

  componentWillMount(){
    this.fetchBots();
  }

  componentWillReceiveProps(nextProps) {
    const { bot, coins, fetchingBot } = nextProps;
    const currenciesList = coins.map(coinMapper);
    const currencies = coins.filter(coinFilter).map(coinMapper);

    if (bot !== {} && !fetchingBot && this.state.fetchingBot) {
      const botId = bot.id;
      this.props.fetchBotCurrencies({botId});
    }

    this.setState({bot, currencies, currenciesList, fetchingBot});
  }

  render() {
    return (
      <DefaultLayout history={this.props.history}>
        <Title thinText="Bot" thickText="Transactions"/>
        <Tabs
          tabs={[
            {
              title: 'Parities Averages',
              content: (
                <Pairs
                  bot={this.props.bot}
                  currencies={this.state.currencies}
                  currenciesList={this.state.currenciesList}
                  reloadCurrencies={this.props.fetchBotCurrencies}
                />
              )
            },
            {
              title: 'Transactions Details',
              content: (
                <Transactions
                  currencies={this.state.currencies}
                  currenciesList={this.state.currenciesList}
                />
              )
            }
          ]}
        />
      </DefaultLayout>
    );
  }
}

function mapStateToProps(state) {
  const bots = state.bots.items;
  const bot = bots.length ? bots[0] : {};
  const coins = state.botCurrencies.items;
  const fetchingBot = state.bots.isFetching;

  return {
    bot,
    coins,
    fetchingBot,
  };
}

export default connect(
  mapStateToProps,
  {
    ...botActions,
    ...botCurrencyActions
  }
)(Dashboard);
