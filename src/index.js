import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './templates';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './ducks'
let { store } = configureStore()
// import {rootReducer} from './ducks';
// import thunk from 'redux-thunk';
// import {compose, applyMiddleware, createStore} from 'redux'
class App extends Component {
    render() {
        return (
          <div>
            <Provider store={store}>
              <Routes />
            </Provider>
          </div>
        );
    }
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
