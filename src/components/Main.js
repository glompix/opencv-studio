import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Index from './Index'
import User from './User'
import Users from './Users'
import NotFound from './NotFound'

class Main extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index}>
          <Route path="users" component={Users}>
            <Route path="/user/:userId" component={User}/>
          </Route>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default Main
