import React, { Component } from 'react';
import ButtonEx from './ButtonEx';
import ContainerBoard from './ContainerBoard';
import ContainerHeaderBoard from './ContainerHeaderBoard';
import TextHeadBoard from './TextHeadBoard';

class exchanges extends Component {
  constructor(props) {
    super(props)
    this.state= {
      stateclassexchange: true,
    }
  }

  render() {
    return (
      <ContainerBoard>
        <ContainerHeaderBoard>
          <TextHeadBoard>Okex</TextHeadBoard>
          <ButtonEx
            active={this.state.stateclassexchange === true}
            onClick={() => this.setState({ stateclassexchange: !this.state.stateclassexchange })}
          />
        </ContainerHeaderBoard>
      </ContainerBoard>
    )
  }
}

export default exchanges;
