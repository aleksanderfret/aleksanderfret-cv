import React, { Component } from 'react';
import Header from '../../components/Header/Header';

import classes from './Layout.scss';

class Layout extends Component {
  state = {
    activePage: 'ddd'
  }

   render() {
    return (
      <React.Fragment>
        <Header
          toggleLanguage={this.props.toggleLanguage}
          isHomePage={this.state.activePage === 'home' ? true : false}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default (Layout);
