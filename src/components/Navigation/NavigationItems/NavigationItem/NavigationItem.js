import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.scss';

class NavigationItem extends Component {
  componentDidMount() {
    if (this.props.position === 0 && this.props.navType === 'sidePanel') {
      const navLink = document.querySelector(`.${classes.SidePanelNavlink}:first-child a`);
      navLink.focus();
    }
  }
  render() {
    const linkClasses = classes[this.props.navType === 'sidePanel' ? 'SidePanelNavlink' : 'ToolBarNavLink'];
    return (
      <li className={linkClasses}>
        <NavLink
          onClick={this.props.clicked}
          to={this.props.link}
          exact={this.props.exact}
          activeClassName={classes.active}>
          {this.props.children}
        </NavLink>
      </li>
    );
  }
};

export default NavigationItem;
