import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SidePanel from 'components/Navigation/SidePanel/SidePanel';
import classes from './Layout.scss';

class Layout extends Component {
  state = {
    isHomePage: true,
    isSidePanelOpen: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      location: { pathname }
    } = nextProps;

    if (pathname === '/') {
      return { isHomePage: true };
    }

    return { isHomePage: false };
  }

  sidePanelToggleHandler = () => {
    this.setState(prevState => {
      return { isSidePanelOpen: !prevState.isSidePanelOpen };
    });
  };

  sidePanelCloseHandler = () => {
    setTimeout(() => {
      this.setState({ isSidePanelOpen: false });
    }, 250);
  };

  render() {
    const { children, toggleLanguage } = this.props;
    const { isHomePage, isSidePanelOpen } = this.state;
    const { Content } = classes;

    return (
      <>
        <Header
          toggleLanguage={toggleLanguage}
          toggleSidePanel={this.sidePanelToggleHandler}
          isHomePage={isHomePage}
        />
        <SidePanel
          isOpen={isSidePanelOpen}
          closeSidePanel={this.sidePanelCloseHandler}
        />
        <main className={Content}>{children}</main>
        <Footer />
      </>
    );
  }
}

export default withRouter(Layout);
