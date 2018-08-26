import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Layout from '../Layot/Layout';
import classes from './CV.scss';

class CV extends Component {
  state = {
    language: 'en'
  }

  toggleLanguage = () => {
    const { i18n } = this.props;
    const lang = this.state.language === 'en' ? 'pl' : 'en';
    this.setState({language: lang});
    i18n.changeLanguage(lang);
  }

  render() {
    return (
      <div className={classes.CV}>
        <Layout
          toggleLanguage={this.toggleLanguage}
        >
        </Layout>

      </div>
    );
  }
}

export default translate('ui')(CV);
