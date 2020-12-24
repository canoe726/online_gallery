import React, { Component } from 'react';

import './App.scss';

import Menu from './components/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
