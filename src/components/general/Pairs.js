import React from 'react';
import FilteredTable from '../tables/FilteredTable';
import TogglePair from '../pairs/TogglePair';
import { ACTIVE_PAIR, PARITIES_TABLE_HEADERS } from '../../constants';
import { connect } from 'react-redux';
import { formatCurrency } from '../../global_functions';
import { actions as botActions } from '../../containers/Bots/store';
import { actions as botCurrencyActions } from '../../containers/BotCurrencies/store';
import { actions as botPairActions } from '../../containers/BotPairs/store';
import { actions as pairActions } from '../../containers/Pairs/store';

class Pairs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currencies: [],
      pairs: [],
      isTogglingBotCurrencies: false,
      isTogglingBotPair: false,
    };
  }

  fetchPairs = () => {
    this.props.fetchPairs();
  }

  isLoading = () => {
    return this.props.isFetchingBots
      || this.props.isFetchingBotCurrencies
      || this.props.isFetchingPairs
      || this.props.isTogglingBotCurrencies
      || this.props.isTogglingBotPair;
  }

  componentWillReceiveProps(nextProps) {
    const { currencies, isTogglingBotCurrencies, isTogglingBotPair, pairs } = nextProps;

    if (!isTogglingBotPair && this.state.isTogglingBotPair) {
      this.fetchPairs();
    }

    if (!isTogglingBotCurrencies && this.state.isTogglingBotCurrencies) {
      const botId = this.props.bot.id;
      this.fetchPairs();
      this.props.reloadCurrencies({botId});
    }

    if (currencies !== this.state.currencies) {
      this.setState({currencies});
    }

    this.setState({isTogglingBotCurrencies, isTogglingBotPair, pairs});
  }

  componentWillMount(){
    this.fetchPairs();
  }

  _handleStatusChange(target) {
    const botId = this.props.bot.id;
    const [id, status] = target.value.split('.');

    if (status === ACTIVE_PAIR) {
      this.props.deleteBotPair({botId, id});
    } else {
      this.props.createBotPair({botId, id});
    }
  }

  _handleFiltersChange(symbols, symbol) {
    let { currencies } = this.state;
    const botId = this.props.bot.id;
    const data = {botId, symbol};

    if (currencies.includes(symbol)) {
      this.props.updateBotCurrency(data);
    } else {
      this.props.createBotCurrency(data);
    }
  }

  _parsePairContent(pair) {
    return [
      pair.name_parity,
      pair.name,
      formatCurrency(pair.average_tx_last_24hours),
      pair.last,
      pair.bid,
      '-',
      formatCurrency(pair.volume),
      "-",
      formatCurrency(pair.average_tx_last_60second),
      formatCurrency(pair.average_tx_last_hour),
      formatCurrency(pair.average_tx_last_6hours),
      formatCurrency(pair.average_tx_last_12hours),
      formatCurrency(pair.average_tx_last_24hours),
      <TogglePair
        color={pair.status_parity === ACTIVE_PAIR ? '#6CFB08' : '#FC4326'}
        currencyid={pair.id}
        onButtonClick={this._handleStatusChange.bind(this)}
        value={`${pair.id}.${pair.status_parity}`}
      />,
    ];
  }

  render() {
    return (
      <FilteredTable
        contentParser={this._parsePairContent.bind(this)}
        filters={this.state.currencies.slice(0)}
        filtersList={this.props.currenciesList}
        loading={this.isLoading()}
        nextPage={this.props.nextPairs}
        onFiltersChange={this._handleFiltersChange.bind(this)}
        prevPage={this.props.prevPairs}
        tableElements={this.state.pairs}
        tableHeaders={PARITIES_TABLE_HEADERS}
      />
    );
  }
}

function mapStateToProps(state) {
  const isCreatingBotCurrencies = state.botCurrencies.isCreating;
  const isDeletingBotCurrencies = state.botCurrencies.isDeleting;
  const isTogglingBotCurrencies = isCreatingBotCurrencies || isDeletingBotCurrencies;
  const isFetchingBots = state.bots.isFetching;
  const isFetchingPairs = state.pairs.isFetching;
  const isTogglingBotPair = state.botPairs.isCreating || state.botPairs.isDeleting;
  const { items } = state.pairs;
  let pairs = items;
  let nextPairs = false;
  let prevPairs = false;

  if (items.length && items[0].results) {
    pairs = items[0].results;
    nextPairs = items[0].next !== null;
    prevPairs = items[0].previous !== null;
  }

  return {
    isCreatingBotCurrencies,
    isDeletingBotCurrencies,
    isTogglingBotCurrencies,
    isFetchingBots,
    isFetchingPairs,
    isTogglingBotPair,
    nextPairs,
    pairs,
    prevPairs,
  };
}

export default connect(
  mapStateToProps,
  {
    ...botActions,
    ...botPairActions,
    ...pairActions,
    ...botCurrencyActions
  }
)(Pairs);
