import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './access/Login'
import Dashboard from './home/Dashboard'
import DetailsTransactions from './home/DetailsTransactions'
import Settings from './settings/Settings'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/details-transactions/:id" component={DetailsTransactions}/>
      <Route exact path="/settings" component={Settings}/>
    </div>
  </Router>
)

export default Routes
