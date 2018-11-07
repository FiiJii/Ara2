import React from 'react';
import Tab from './Tab';
import TabsContainer from './TabsContainer';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  _handleTabChange(event) {
    const { value } = event.target;

    this.setState({currentTab: value});
  }

  render() {
    const { currentTab } = this.state;

    return (
      <div>
        <TabsContainer>
          {this.props.tabs.map((tab, key) => (
            <Tab
              currentTab={currentTab}
              key={key}
              onClick={this._handleTabChange.bind(this)}
              value={key}
            >
              {tab.title}
            </Tab>
          ))}
        </TabsContainer>
        {this.props.tabs[currentTab].content}
      </div>
    );
  }
}

export default Tabs;
