import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../../styles/components/row-board.css';

class RowBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: {},
      showConfirm: false
    };
  }

  _handleButtonClick(event) {
    const { target } = event;

    this.setState({
      target,
      showConfirm: true
    });
  }

  _handleConfirmAccept(event) {
    this.setState({showConfirm: false}, () => this.props.onButtonClick(this.state.target));
  }

  _handleConfirmClose(event) {
    this.setState({showConfirm: false});
  }

  render() {
    const { props } = this;
    const action = props.status === 'active' ? 'Disable' : 'Enable';

    return (
      <div className="container-row-board">
      <Dialog
          open={this.state.showConfirm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Toggle currency</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to {action} this currency?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button className="button-active" onClick={this._handleConfirmClose.bind(this)} color="primary">
              Cancel
            </button>
            <button className="button-active" onClick={this._handleConfirmAccept.bind(this)} color="primary">
              Accept
            </button>
          </DialogActions>
        </Dialog>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext1}</p>
          <p className="value-row-board" >{props.boddyText1}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext2}</p>
          <p className="value-row-board" >{props.boddyText2}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext3}</p>
          <p className="value-row-board" >{props.boddyText3}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext4}</p>
          <p className="value-row-board" >{props.boddyText4}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext5}</p>
          <p className="value-row-board" >{props.boddyText5}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext6}</p>
          <p className="value-row-board" >{props.boddyText6}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext7}</p>
          <p className="value-row-board" >{props.boddyText7}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext8}</p>
          <p className="value-row-board" >{props.boddyText8}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext9}</p>
          <p className="value-row-board" >{props.boddyText9}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext10}</p>
          <p className="value-row-board" >{props.boddyText10}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext11}</p>
          <p className="value-row-board" >{props.boddyText11}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext12}</p>
          <p className="value-row-board" >{props.boddyText12}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext13}</p>
          <p className="value-row-board" >{props.boddyText13}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext14}</p>
          <p className="value-row-board" >{props.boddyText14}</p>
        </div>
        <div className="container-text-row-board">
          <p className="itemes-row-board">{props.headtext15}</p>
          <div className="value-row-board" >
            <p className="container-red-green">
              <button
                className={props.boddyText15 === 'green' ? "green" : props.boddyText15 === 'red' ? "red" : null}
                onClick={this._handleButtonClick.bind(this)}
                value={props.status}
                currencyid={props.currencyId}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RowBoard;
