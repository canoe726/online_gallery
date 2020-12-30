import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';

import Menu from './components/menu/menu';

import Home from './components/home/home';
import Introduction from './components/introduction/introduction';
import Exhibition from './components/exhibition/exhibition';
import Author from './components/author/author';
import Notice from './components/notice/notice';

class App extends Component {
  render() {
    const { location } = this.props;

    return (
      <div id="online-gallery">
        <Menu></Menu>

        <Switch location={location}>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/introduction" component={Introduction}></Route>
          <Route exact path="/exhibition" component={Exhibition}></Route>
          <Route exact path="/author" component={Author}></Route>
          <Route exact path="/notice" component={Notice}></Route>
        </Switch>
      </div>      
    );
  }
}

export default withRouter(App);
