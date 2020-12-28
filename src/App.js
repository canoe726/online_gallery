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
        <Route exact path="/introduction" component={Home}></Route>
        <Route exact path="/exhibition" component={Home}></Route>
        <Route exact path="/author" component={Home}></Route>
        <Route exact path="/notice" component={Home}></Route>
      </Switch>
    );
  }
}

export default withRouter(App);
