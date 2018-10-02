import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classes from './Education.scss';
import School from './School/School';

class Education extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    return (
      <div className={classes.Education}>
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
        <ul>
          {this.props.t('education', { returnObjects: true }).map((school, index) => (
            <li key={index}>
              <School
                {...school}
                labels={this.props.t('labels', { returnObjects: true })}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

}

export default translate('education')(Education);
