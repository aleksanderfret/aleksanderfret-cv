import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { translate } from 'react-i18next';
import Layout from '../Layot/Layout';
import PageController from '../PageController/PageController';
import Home from '../PageComponents/Home/Home';
import NotFound from '../PageComponents/NotFound/NotFound';
import classes from './CV.scss';

class CV extends Component {
  state = {
    language: 'pl'
  }

  toggleLanguage = () => {
    const { i18n } = this.props;
    const lang = this.state.language === 'en' ? 'pl' : 'en';
    this.setState({ language: lang });
    i18n.changeLanguage(lang);
    window.recaptchaOptions.lang = lang;
  }

  componentDidMount() {
    window.recaptchaOptions = {
      lang: this.state.language,
      useRecaptchaNet: true,
      removeOnUnmount: true
    };
  }

  render() {
    return (
      <div className={classes.CV}>
        <Layout toggleLanguage={this.toggleLanguage}>
          <Switch>
            <Route path='/:page' component={PageController} />
            <Route path='/' exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default translate('ui')(CV);
