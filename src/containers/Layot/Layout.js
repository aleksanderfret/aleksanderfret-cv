import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.scss';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar
          toggleLanguage={this.props.toggleLanguage}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default (Layout);
