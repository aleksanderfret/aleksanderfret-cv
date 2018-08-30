import React from 'react';
import { Link } from 'react-router-dom';
import FontIcon from '../../../../UI/FontIcon/FontIcon';
import classes from './PageTile.scss';

const pageTile = (props) => {
  return(
    <div className={classes.PageTile}>
      <Link to={`/${props.route}`}>
        <div className={classes.Icon}>
          <FontIcon
            iconType={props.route}/>
        </div>
        <div className={classes.Info}>
          <h3>{props.title}</h3>
          <ul>
            {props.content.map(((text, index) => (
              <li key={index}>{text}</li>
            )))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default pageTile;
