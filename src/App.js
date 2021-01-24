import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Menu from './components/menu/menu';

import Home from './components/home/home';
import Introduction from './components/introduction/introduction';
import Exhibition from './components/exhibition/exhibition';
import ExhibitionDetail from './components/exhibition_detail/exhibitionDetail';
import Author from './components/author/author';
import AuthorDetail from './components/author_detail/authorDetail';
import Notice from './components/notice/notice';
import NotFound from './components/error/NotFound';

class App extends Component {
  render() {
    return (
      <div id="online-gallery">
        <Menu></Menu>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/introduction" component={Introduction}></Route>
          <Route exact path="/exhibition" component={Exhibition}></Route>
          <Route exact path="/exhibition/:id" component={ExhibitionDetail}></Route>
          <Route exact path="/author" component={Author}></Route>
          <Route exact path="/author/:id" component={AuthorDetail}></Route>
          <Route exact path="/notice" component={Notice}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>      
    );
  }
}

export default App;
