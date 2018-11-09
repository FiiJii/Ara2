import React, { Component } from 'react';
import Table from '../../components/general/Table';
import { MdArrowBack } from 'react-icons/md';
import Tooltip from '@material-ui/core/Tooltip';
import { actions as currencyActions } from '../../containers/Currencies/store';
import { actions as botActions } from '../../containers/Bots/store';
import { actions as botCurrencyActions } from '../../containers/BotCurrencies/store';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabsub from '../../components/tabs/Tabsub';
import ReactDOM from 'react-dom';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import '../../styles/templates/settings.css';

const styles = theme => ({
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   flexGrow: 1,
  // },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      botId: null,
      currency: '',
      value: 0,
      isFetchingBots: false,
      isCreatingBotCurrencies: false,
      isDeletingBotCurrencies: false,
      valuerange: '50',
    };
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value });
  }

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  removeCurrencyFromBot = (event) => {
    const { botId } = this.state;
    const id = event.target.value;

    this.props.deleteBotCurrency({botId, id});
  }

  addCurrencyToBot = (event) => {
    const { currency, botId } = this.state;

    this.props.createBotCurrency({botId, id: currency});
  }

  extractBotId = (bots) => {
    let id = null;
    if (bots.length === 1) {
      id = bots[0].id;
    }
    return id;
  }

  fetchBotCurrencies = (bots, isFetchingBots, botId) => {
    if (!isFetchingBots && this.state.isFetchingBots && botId !== null) {
      this.props.fetchBotCurrencies({botId});
    }
  }

  fetchBots = () => {
    this.props.fetchBots(null, {query: {paginate: false}});
  }

  componentDidMount() {
    this.props.fetchCurrencies(null, {query: {paginate: false}});
    this.fetchBots();
  }

  componentWillReceiveProps(nextProps) {
    const {
      bots,
      isFetchingBots,
      isCreatingBotCurrencies,
      isDeletingBotCurrencies
    } = nextProps;
    const botId = this.extractBotId(bots);

    this.fetchBotCurrencies(bots, isFetchingBots, botId);

    if (
      (!isCreatingBotCurrencies && this.state.isCreatingBotCurrencies) ||
      (!isDeletingBotCurrencies && this.state.isDeletingBotCurrencies)
    ) {
      this.fetchBots();
    }

    this.setState({
      botId,
      isFetchingBots,
      isCreatingBotCurrencies,
      isDeletingBotCurrencies
    });
  }

  render() {
    const { currency } = this.state;

    return (
      <DefaultLayout history={this.props.history}>
        <div className="total-center">
          <div className="container-dashboard">
            <div>
              <p className="title-session text-center" ><span className="title-ligth">Bot </span>Settings</p>
            </div>
            <div className="container-title-settings">
              <Tooltip title="Go back" placement="left-start" >
                < MdArrowBack className="icon-back opacity" onClick={()=>this.props.history.push('/dashboard')}/>
              </Tooltip>
              <p className="subtitle-session" > Back to home <br/></p>
            </div>
            <Tabsub>
              <div>
                <div>
                <form className='add-currency-form' autoComplete="off">
                  <FormControl className="formControl" variant="outlined">
                    <InputLabel
                      className="input-label"
                      ref={ref => {
                      this.labelRef = ReactDOM.findDOMNode(ref);
                      }}
                      htmlFor="outlined-coin-native-simple"
                    >
                      Select coin
                    </InputLabel>
                    <Select
                      className="selector"
                      native
                      value={currency}
                      onChange={this.handleChange}
                      name="currency"
                      input={
                        <FilledInput
                          className="filled"
                          labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                          id="outlined-coin-native-simple"
                        />
                      }
                    >
                      <option value="" disabled placeholder=""/>
                        {
                          this.props.currencies.map((currency, key) => (
                            <option key={key} value={currency.id}>{currency.name}</option>
                          ))
                        }
                    </Select>
                  </FormControl>
                  <button
                    type="button"
                    className="button-add"
                    onClick={this.addCurrencyToBot}
                  >
                    Add
                  </button>
                </form>
                <div className="grid-settings-title">
                  <p className="header-value-details">Coin</p>
                  <p className="header-value-details">Description</p>
                  <p className="header-value-details">Action</p>
                </div>
                <div className="grid-settings">
                  {
                    this.props.botCurrencies.map(({id, name, symbol}, key) =>{
                      return(
                        <div key={key}>
                          <Table
                            id={id}
                            name={name}
                            symbol={symbol}
                            handleClick={this.removeCurrencyFromBot}
                          />
                        </div>
                      )
                    })
                  }
                </div>
                </div>
              </div>
              <div>
              <TabContainer>
                <div className="grid-general">
                  <div>
                    <p className="settings">Active</p>
                  </div>
                  <div>
                    <Switch
                      checked={this.state.checkedB}
                      value="checkedB"
                      color="primary"
                    />
                  </div>
                  <div>
                    <p className="settings">Interval</p>
                  </div>
                  <div>
                    <input className="settings-input" type="number" min="0" max="1" step="0.00001"></input>
                  </div>
                  <div>
                    <p className="settings">Max Lost</p>
                  </div>
                  <div className="settings-slider">
                    <input
                      type="range"
                      id="range"
                      min="1"
                      max="100"
                      className="slider"
                      value={this.state.valuerange}
                      onChange={event => this.setState({valuerange: event.target.value})}
                    />
                    <p className="settings-range">Value: {this.state.valuerange} %</p>
                  </div>
                  <div>
                    <p className="settings">Verbosity</p>
                  </div>
                  <div className="verbosity">
                    <label className="checkbox-inline">
                      <input  type="radio" name="radio"></input>
                      <p>Low</p>
                    </label>
                    <label className="checkbox-inline">
                      <input  type="radio" name="radio"></input>
                      <p>Mediun</p>
                    </label>
                    <label className="checkbox-inline">
                      <input  type="radio" name="radio"></input>
                      <p>High</p>
                    </label>
                  </div>
                </div>
              </TabContainer>
              </div>
            </Tabsub>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state) {
  const currencies = state.currencies.items;
  const isFetchingBots = state.bots.isFetching;
  const isCreatingBotCurrencies = state.botCurrencies.isCreating;
  const isDeletingBotCurrencies = state.botCurrencies.isDeleting;
  const bots = state.bots.items;
  const botCurrencies = state.botCurrencies.items;

  return {
    currencies,
    bots,
    isFetchingBots,
    isCreatingBotCurrencies,
    isDeletingBotCurrencies,
    botCurrencies
  }
}

export default connect (
  mapStateToProps,
  { ...currencyActions, ...botActions, ...botCurrencyActions }
) (withStyles(styles)(Settings));
