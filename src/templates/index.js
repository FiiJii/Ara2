import React from 'react';
import Dashboard from './home/Dashboard';
import Login from './access/Login';
import Settings from './settings/Settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/settings" component={Settings}/>
    </div>
  </Router>
);

export default Routes;
