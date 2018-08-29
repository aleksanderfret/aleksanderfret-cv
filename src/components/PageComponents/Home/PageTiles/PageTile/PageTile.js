import React from 'react';
import { Link } from 'react-router-dom';

const pageTile = (props) => {
  return(
    <Link to={props.route}>
      <div style={{margin: '1rem'}}>
        <h3>{props.title}</h3>
        <ul>
          {props.content.map(((text, index) => (
            <li key={index}>{text}</li>
          )))}
        </ul>
      </div>
    </Link>
  );
};

export default pageTile;
