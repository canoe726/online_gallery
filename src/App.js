import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';

import Home from './components/home/home';

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <Switch location={location}>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    );
  }
}

export default withRouter(App);
