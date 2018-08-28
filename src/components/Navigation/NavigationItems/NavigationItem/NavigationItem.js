import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.scss';

const navigationItem = (props) => {
  const linkClasses = classes[props.sidepanel ? 'SidePanelNavlink' : 'ToolBarNavLink'];
  return(
    <li className={linkClasses}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
