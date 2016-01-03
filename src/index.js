import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import App from './components/App'
import Index from './components/pages/Index'
import User from './components/pages/User'
import Users from './components/pages/Users'
import NotFound from './components/pages/NotFound'
import ImageSetList from './components/pages/ImageSetList'

render((
	<Router history={browserHistory}>
    <Route path="/" component={App}>
			<IndexRoute component={Index}/>
      <Route path="images" component={ImageSetList}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>), document.getElementById('app'));
