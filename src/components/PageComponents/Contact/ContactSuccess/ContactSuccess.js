import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import classes from './ContactSuccess.scss';

class ContactSuccess extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    const { t } = this.props;

    return (
      <div className={classes.ContactSuccess}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        <div className={classes.SuccessMessage}>
          {t('form.success', { returnObjects: true }).map(message => (
            <p key={message}>{message}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default withTranslation('contact')(ContactSuccess);
