import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

//import Home from '@/pages/index'

export default class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
         {/*<Route path='/defood' component={Home}></Route>*/}
        </Switch>
      </Router>
    )
  }
}