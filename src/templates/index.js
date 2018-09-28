import React from 'react'
import {BrowserRouter as Router,Route,} from 'react-router-dom'

import Login from './access/Login'
import Dashborad from './home/Dashborad'
import DetailsTransactions from './home/DetailsTransactions'
const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashborad" component={Dashborad}/>
      <Route exact path="/details-transactions/:id" component={DetailsTransactions}/>
    </div>
  </Router>
)
export default Routes
