import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SidePanel from '../../components/Navigation/SidePanel/SidePanel';
import { withRouter } from 'react-router-dom';

import classes from './Layout.scss';

class Layout extends Component {
  state = {
    isHomePage: true,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname === '/') {
      return {isHomePage: true};
    }
    return {isHomePage: false};
  }

  render() {
    return (
      <React.Fragment>
        <Header
          toggleLanguage={this.props.toggleLanguage}
          toggleSidePanel={this.sidePanelToggleHandler}
          isHomePage={this.state.isHomePage}/>
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

export default withRouter(Layout);
