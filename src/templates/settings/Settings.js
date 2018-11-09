import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import FormComponent from '../../components/base/FormComponent';
import FormGrid from '../../components/form/FormGrid';
import Title from '../../components/general/Title';
import TotalCenter from '../../components/general/TotalCenter';
import styled from 'styled-components';
import { DEFAULT_BOT, SETTINGS_INPUTS } from '../../constants';
import { connect } from 'react-redux';
import { actions as botActions } from '../../containers/Bots/store';

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: 60px;
  padding: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding: 10px 10px;
`;

const Button = styled.button`
  width: 80px;
  max-width: 320px;
  height: 30px;
  border: none;
  border-radius: 15px;
  background: #64C0EA;
  text-align: center;
  line-height: 30px;
  color: #FFF;
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 600;
  font-weight: bold;
  display: inline-block;
  margin-right: 30px;

  &:focus {
    outline: none;
  }
`;

// isCreatingBotCurrencies: false,
// isDeletingBotCurrencies: false,

// removeCurrencyFromBot = (event) => {
//   const { bot } = this.state;
//   const id = event.target.value;
//
//   this.props.deleteBotCurrency({botId: bot.id, id});
// }
//
// addCurrencyToBot = (event) => {
//   const { currency, bot } = this.state;
//
//   this.props.createBotCurrency({botId: bot.id, id: currency});
// }

// this.props.fetchCurrencies(null, {query: {paginate: false}});

// fetchBotCurrencies = (bots, isFetchingBots, botId) => {
//   if (!isFetchingBots && this.state.isFetchingBots && botId !== null) {
//     this.props.fetchBotCurrencies({botId});
//   }
// }

// isCreatingBotCurrencies,
// isDeletingBotCurrencies

// this.fetchBotCurrencies(bots, isFetchingBots, botId);

// if (
//   (!isCreatingBotCurrencies && this.state.isCreatingBotCurrencies) ||
//   (!isDeletingBotCurrencies && this.state.isDeletingBotCurrencies)
// ) {
//   this.fetchBots();
// }

// isCreatingBotCurrencies,
// isDeletingBotCurrencies

// <form className='add-currency-form' autoComplete="off">
//   <FormControl className="formControl" variant="outlined">
//     <InputLabel
//       className="input-label"
//       ref={ref => {
//       this.labelRef = ReactDOM.findDOMNode(ref);
//       }}
//       htmlFor="outlined-coin-native-simple"
//     >
//       Select coin
//     </InputLabel>
//     <Select
//       className="selector"
//       native
//       value={currency}
//       onChange={this.handleChange}
//       name="currency"
//       input={
//         <FilledInput
//           className="filled"
//           labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
//           id="outlined-coin-native-simple"
//         />
//       }
//     >
//       <option value="" disabled placeholder=""/>
//         {
//           this.props.currencies.map((currency, key) => (
//             <option key={key} value={currency.id}>{currency.name}</option>
//           ))
//         }
//     </Select>
//   </FormControl>
//   <button
//     type="button"
//     className="button-add"
//     onClick={this.addCurrencyToBot}
//   >
//     Add
//   </button>
// </form>
// <div className="grid-settings-title">
//   <p className="header-value-details">Coin</p>
//   <p className="header-value-details">Description</p>
//   <p className="header-value-details">Action</p>
// </div>
// <div className="grid-settings">
//   {
//     this.props.botCurrencies.map(({id, name, symbol}, key) =>{
//       return(
//         <div key={key}>
//           <Table
//             id={id}
//             name={name}
//             symbol={symbol}
//             handleClick={this.removeCurrencyFromBot}
//           />
//         </div>
//       )
//     })
//   }
// </div>

// <div className="container-title-settings">
//   <Tooltip title="Go back" placement="left-start" >
//     < MdArrowBack className="icon-back opacity" onClick={()=>this.props.history.push('/dashboard')}/>
//   </Tooltip>
//   <p className="subtitle-session" > Back to home <br/></p>
// </div>

class Settings extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      value: 0,
      isFetchingBots: false,
      bot: DEFAULT_BOT,
    };
  }

  formState = 'bot';

  extractBot = (bots) => {
    let bot = DEFAULT_BOT;
    if (bots.length === 1) {
      bot = bots[0];
    }
    return bot;
  }

  _handleSave = (event) => {
    this.props.updateBot(this.state.bot)
  }

  fetchBots = () => {
    this.props.fetchBots(null, {query: {paginate: false}});
  }

  componentDidMount() {
    this.fetchBots();
  }

  componentWillReceiveProps(nextProps) {
    const {
      bots,
      isFetchingBots,
    } = nextProps;
    const bot = this.extractBot(bots);

    this.setState({
      bot,
      isFetchingBots,
    });
  }

  render() {
    console.log("bot", this.state.bot);
    return (
      <DefaultLayout history={this.props.history} selectedOption="settings">
        <TotalCenter>
          <div>
            <Title centered={true} thinText="Bot" thickText="Settings"/>
            <FormGrid>
              {this._renderInputs(SETTINGS_INPUTS)}
            </FormGrid>

            <ButtonsContainer>
              <ButtonContainer>
                <Button
                  onClick={() => this.props.history.push('/dashboard')}
                >
                  Cancel
                </Button>
              </ButtonContainer>

              <ButtonContainer>
                <Button
                  onClick={this._handleSave.bind(this)}
                >
                  Save
                </Button>
              </ButtonContainer>
            </ButtonsContainer>
          </div>
        </TotalCenter>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state) {
  const isFetchingBots = state.bots.isFetching;
  const bots = state.bots.items;

  return {
    bots,
    isFetchingBots
  }
}

export default connect(mapStateToProps, {...botActions})(Settings);
