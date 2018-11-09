import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './templates';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './ducks';

let { store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
