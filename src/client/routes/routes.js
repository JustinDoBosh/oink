import React from 'react'
import { IndexRoute, Route, IndexRedirect, Router, Redirect, browserHistory } from 'react-router'
import App from '../containers/app'
import Dashboard from '../containers/dashboard'

const routes = (
  <Router history={ browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    </Route>
  </Router>
)

export default routes
