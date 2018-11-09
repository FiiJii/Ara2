import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../../styles/templates/settings.css';

class Tabsub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    };
  }

  render() {
    return(
      <div>
        <div className="box-titles-tabs">
          <div className="box-titles-tabs-settings">
            <p className={this.state.tab === 1 ? 'title-tab-settings-on title-tab-settings' : 'title-tab-settings' }
              onClick={() => this.setState({ tab: 1 })}>Currencies</p>
            <p className={this.state.tab === 2 ? 'title-tab-settings-on title-tab-settings' : 'title-tab-settings'}
              onClick={() => this.setState({ tab: 2 })}>General</p>
          </div>
        </div>
        {
          this.state.tab === 1 ?
            <div>
              {this.props.children[0]}
            </div>
          :
            this.state.tab === 2 ?
              <div>
                {this.props.children[1]}
              </div>
          :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {  }
}

export default connect(mapStateToProps)(Tabsub)
