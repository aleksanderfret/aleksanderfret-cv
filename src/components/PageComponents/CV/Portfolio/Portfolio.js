import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Project from './Project/Project';
import classes from './Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    return (
      <div className={classes.Portfolio}>
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
        <ul className={classes.Projects}>
          {this.props.t('works', { returnObjects: true }).map((work, index) => (
            <li
              key={index}>
              <Project
                {...work}
                labels={this.props.t('labels', { returnObjects: true })}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default translate('portfolio')(Portfolio);
