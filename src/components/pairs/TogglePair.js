import React from 'react';
import Button from '../general/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToggleButtonContainer from './ToggleButtonContainer';
import ToggleButton from './ToggleButton';

class TogglePair extends React.Component {
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
      <div>
        <Dialog
          open={this.state.showConfirm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Toggle parity</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to {action} this parity?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button active={true} onClick={this._handleConfirmClose.bind(this)} text="Cancel"/>
            <Button active={true} onClick={this._handleConfirmAccept.bind(this)} text="Accept"/>
          </DialogActions>
        </Dialog>
        <ToggleButtonContainer>
          <ToggleButton
            color={props.color}
            onClick={this._handleButtonClick.bind(this)}
            value={props.value}
          />
        </ToggleButtonContainer>
      </div>
    );
  }
}

export default TogglePair;
