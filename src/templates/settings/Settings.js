import React, { Component } from 'react';
import Table from '../../components/general/Table';
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';
import Tooltip from '@material-ui/core/Tooltip';
import { Grid, Row, Col } from 'react-bootstrap';
import { actions as currencyActions } from '../../containers/Currencies/store';
import { actions as botActions } from '../../containers/Bots/store';
import { actions as botCurrencyActions } from '../../containers/BotCurrencies/store';
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../../styles/templates/settings.css';


import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    console.log('nextProps', nextProps);
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
    const { classes } = this.props;
    const { value, currency } = this.state;
    console.log('currency', currency);
    return (
      <DefaultLayout history={this.props.history}>
        <div className="total-center">
          <div className="container-Dashboard">
            <div>
              <p className="title-session text-center" ><span className="title-ligth">Bot </span>Settings</p>
            </div>

            <div className="container-title-settings">
              <Tooltip title="Go back" placement="left-start" >
                < MdArrowBack className="icon-back opacity" onClick={()=>this.props.history.push('/dashboard')}/>
              </Tooltip>
              <p className="subtitle-session" > Back to home <br/></p>
            </div>
            <div className={classes.root}>
              <AppBar position="static" color="default" id="menu">
                <Tabs
                  value={value}
                  onChange={this.handleChangeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                  scrollButtons="auto"
                >
                  <Tab label="Currencies" opacity/>
                  <Tab label="General" />
                </Tabs>
              </AppBar>
              {value === 0 && <div>


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
              </div>}
              {value === 1 && <TabContainer>
                <Grid className='purchase-card'>

                        <div className="grid">
                          <Row className="grid-container">
                            <Col sm={3}>
                              <p className="settings">Active</p>
                            </Col>
                            <Col sm={3}>
                              <Switch
                                checked={this.state.checkedB}
                                value="checkedB"
                                color="primary"
                              />
                            </Col>
                          </Row>
                          <Row className="grid-container">
                            <Col sm={3}>
                              <p className="settings">Interval</p>
                            </Col>
                            <Col sm={3}>
                              <input className="settings-input"></input>
                            </Col>
                          </Row>
                          <Row className="grid-container">
                            <Col sm={3}>
                              <p className="settings">Max Lost</p>
                            </Col>
                            <Col sm={3}>
                              <input className="settings-input" type="number"></input>
                            </Col>
                          </Row>
                          <Row className="grid-container">
                            <Col sm={3}>
                              <p className="settings">Verbosity</p>
                            </Col>
                            <Col className="settings-input">
                              <div className="settings-input">
                                <label className="checkbox-inline">
                                  <input className="settings-input settings-input" type="checkbox"></input>
                                  <p>Low</p>
                                </label>
                                <label className="checkbox-inline">
                                  <input className="settings-input settings-input" type="checkbox"></input>
                                  <p>Mediun</p>
                                </label>
                                <label className="checkbox-inline">
                                  <input className="settings-input" type="checkbox"></input>
                                  <p>High</p>
                                </label>
                              </div>
                            </Col>
                          </Row>
                        </div>

                </Grid>

              </TabContainer>}
            </div>

          </div>
        </div>

      </DefaultLayout>
    )
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
