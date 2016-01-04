import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import App from './components/App'
import Index from './components/pages/Index'
import User from './components/pages/User'
import Users from './components/pages/Users'
import NotFound from './components/pages/NotFound'
import ImageSetList from './components/pages/ImageSetList'
import ImageSetDetail from './components/pages/ImageSetDetail'

render((
	<Router history={browserHistory}>
    <Route path="/" component={App}>
			<IndexRoute component={ImageSetList}/>
      <Route path="images" component={ImageSetList}/>
      <Route path="images/:id" component={ImageSetDetail}/>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>), document.getElementById('app'));
