import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classes from './CV.scss';

class CV extends Component {
  state = {
    language: 'en'
  }

  toggleLanguages = () => {
    const { i18n } = this.props;
    const lang = this.state.language === 'en' ? 'pl' : 'en';
    this.setState({language: lang});
    i18n.changeLanguage(lang);
  }

  render() {
    return (
      <div className={classes.CV}>
        <button onClick={this.toggleLanguages}>{this.props.t('language')}</button>
      </div>
    );
  }
}

export default translate('common')(CV);
