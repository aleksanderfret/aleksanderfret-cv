import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classes from './ContactSuccess.scss';

class ContactSuccess extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }
  render() {
    return (
      <div className={classes.ContactSuccess}>
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
        <div className={classes.SuccessMessage}>
          {this.props.t('form.success', { returnObjects: true }).map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default translate('contact')(ContactSuccess);
