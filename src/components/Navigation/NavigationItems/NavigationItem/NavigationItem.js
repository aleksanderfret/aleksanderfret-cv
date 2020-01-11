import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.scss';

class NavigationItem extends Component {
  componentDidMount() {
    const { navType, position } = this.props;
    const { SidePanelNavlink } = classes;

    if (position === 0 && navType === 'sidePanel') {
      const navLink = document.querySelector(
        `.${SidePanelNavlink}:first-child a`
      );
      navLink.focus();
    }
  }

  render() {
    const { clicked, link, exact, children, navType } = this.props;
    const { active } = classes;
    const linkClasses =
      classes[navType === 'sidePanel' ? 'SidePanelNavlink' : 'ToolBarNavLink'];

    return (
      <li className={linkClasses}>
        <NavLink
          onClick={clicked}
          to={link}
          exact={exact}
          activeClassName={active}
        >
          {children}
        </NavLink>
      </li>
    );
  }
}

export default NavigationItem;
