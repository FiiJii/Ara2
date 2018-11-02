import React from 'react';
import FilteredTable from '../tables/FilteredTable';
import { CURRENCIES_FILTERS, TRANSACTIONS_TABLE_HEADERS } from '../../constants';
import { connect } from 'react-redux';
import { actions as transactionsActions } from '../../containers/TransactionDetails/store';

class Transactions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currencies: CURRENCIES_FILTERS,
      page: 1,
      transactions: [],
    };
  }

  buildFilters = (list) => {
    let filters = {};
    const currency = this.state[list].map(currency => currency.value).join(',');

    if (currency.length) {
      filters = {currency};
    }

    return filters;
  }

  _fetchTransactions(page = 1) {
    const query = {page, ...this.buildFilters('currencies')};

    this.setState({page}, () => this.props.fetchTransactionDetails(null, {query}));
  }

  componentWillReceiveProps(nextProps) {
    const { transactions } = nextProps;

    this.setState({transactions});
  }

  componentWillMount(){
    this._fetchTransactions();
  }

  _handleFiltersChange(currencies) {
    this.setState({currencies}, () => this._fetchTransactions());
  }

  _parseTransactionContent(transaction) {
    return [
      transaction.creation_date.split('T')[1],
      transaction.parity.name,
      transaction.parity.symbol,
      transaction.okex_order,
      transaction.action,
      transaction.amount,
      transaction.commission,
    ];
  }

  render() {
    return (
      <FilteredTable
        allFilters={true}
        contentParser={this._parseTransactionContent.bind(this)}
        currentPage={this.state.page}
        filters={this.state.currencies}
        filtersList={CURRENCIES_FILTERS}
        loading={this.props.isFetchingTransactions}
        loadPage={this._fetchTransactions.bind(this)}
        nextPage={this.props.nextTransactions}
        onFiltersChange={this._handleFiltersChange.bind(this)}
        prevPage={this.props.prevTransactions}
        tableElements={this.state.transactions}
        tableHeaders={TRANSACTIONS_TABLE_HEADERS}
      />
    );
  }
}

function mapStateToProps(state) {
  const isFetchingTransactions = state.transactionDetails.isFetching;
  const { items } = state.transactionDetails;
  let transactions = items;
  let nextTransactions = false;
  let prevTransactions = false;

  if (items.length && items[0].results) {
    transactions = items[0].results;
    nextTransactions = items[0].next !== null;
    prevTransactions = items[0].previous !== null;
  }

  return {
    isFetchingTransactions,
    nextTransactions,
    prevTransactions,
    transactions
  };
}

export default connect(
  mapStateToProps,
  {
    ...transactionsActions
  }
)(Transactions);
