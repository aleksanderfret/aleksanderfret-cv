import React, { Component } from 'react';
import classes from './App.scss';

import Cockpit from './components/Cockpit';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>My personal site</h1>
        <Cockpit />
        <Content />
      </div>
    );
  }
}

export default App;
