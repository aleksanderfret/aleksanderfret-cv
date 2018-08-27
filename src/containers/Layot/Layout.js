import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SidePanel from '../../components/Navigation/SidePanel/SidePanel';

import classes from './Layout.scss';

class Layout extends Component {
  state = {
    activePage: 'home',
    isSidePanelOpen: false
  }

  sidePanelToggleHandler = () => {
    this.setState((prevState) => {
      return {isSidePanelOpen: !prevState.isSidePanelOpen};
    });
  }

  sidePanelCloseHandler = () => {
    this.setState({isSidePanelOpen: false});
  }

  render() {
    return (
      <React.Fragment>
        <Header
          toggleLanguage={this.props.toggleLanguage}
          toggleSidePanel={this.sidePanelToggleHandler}
          isHomePage={this.state.activePage === 'home' ? true : false}/>
        <SidePanel
          isOpen={this.state.isSidePanelOpen}
          closeSidePanel={this.sidePanelCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default (Layout);
