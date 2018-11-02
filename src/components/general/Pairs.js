import React from 'react';
import FilteredTable from '../tables/FilteredTable';
import TogglePair from '../pairs/TogglePair';
import { ACTIVE_PAIR, CURRENCIES_FILTERS, PARITIES_TABLE_HEADERS } from '../../constants';
import { connect } from 'react-redux';
import { formatCurrency } from '../../global_functions';
import { actions as botActions } from '../../containers/Bots/store';
import { actions as botPairActions } from '../../containers/BotPairs/store';
import { actions as pairActions } from '../../containers/Pairs/store';

class Pairs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bot: {},
      currencies: CURRENCIES_FILTERS,
      pairs: [],
      isTogglingBotPair: false
    };
  }

  fetchBots = () => {
    this.props.fetchBots(null, {query: {paginate: false}});
  }

  fetchPairs = () => {
    this.props.fetchPairs();
  }

  componentWillReceiveProps(nextProps) {
    const { bot, isTogglingBotPair, pairs } = nextProps;

    if (!isTogglingBotPair && this.state.isTogglingBotPair) {
      this.fetchPairs();
    }

    this.setState({bot, isTogglingBotPair, pairs});
  }

  componentWillMount(){
    this.fetchBots();
    this.fetchPairs();
  }

  _handleStatusChange(target) {
    const botId = this.state.bot.id;
    const id = target.getAttribute("currencyid");

    if (target.value === ACTIVE_PAIR) {
      this.props.deleteBotPair({botId, id});
    } else {
      this.props.createBotPair({botId, id});
    }
  }

  _handleFiltersChange(currencies) {
  }

  _parsePairContent(pair) {
    return [
      pair.symbol,
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
        currencyId={pair.id}
        onButtonClick={this._handleStatusChange.bind(this)}
        status={pair.status_parity}
      />,
    ];
  }

  render() {
    return (
      <FilteredTable
        allFilters={true}
        contentParser={this._parsePairContent.bind(this)}
        filters={this.state.currencies}
        filtersList={CURRENCIES_FILTERS}
        loading={this.props.isFetchingPairs || this.props.isTogglingBotPair}
        onFiltersChange={this._handleFiltersChange.bind(this)}
        tableElements={this.state.pairs}
        tableHeaders={PARITIES_TABLE_HEADERS}
      />
    );
  }
}

function mapStateToProps(state) {
  const bots = state.bots.items;
  const bot = bots.length ? bots[0] : {};
  const isFetchingPairs = state.pairs.isFetching;
  const isTogglingBotPair = state.botPairs.isCreating || state.botPairs.isDeleting;
  const pairs = state.pairs.items;

  return {
    bot,
    isFetchingPairs,
    isTogglingBotPair,
    pairs,
  };
}

export default connect(
  mapStateToProps,
  {
    ...botActions,
    ...botPairActions,
    ...pairActions
  }
)(Pairs);
