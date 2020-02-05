import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import Layout from 'components/Layout/Layout';
import PageController from 'components/PageController/PageController';
import ProjectDetails from 'components/PageComponents/CV/Portfolio/ProjectDetails/ProjectDetails';
import ContactSuccess from 'components/PageComponents/Contact/ContactSuccess/ContactSuccess';
import Home from 'components/PageComponents/Home/Home';
import NotFound from 'components/PageComponents/NotFound/NotFound';
import classes from './CV.scss';

class CV extends Component {
  state = {
    language: 'en'
  };

  componentDidMount() {
    const { language: lang } = this.state;

    window.recaptchaOptions = {
      lang,
      useRecaptchaNet: true,
      removeOnUnmount: true
    };
  }

  toggleLanguage = () => {
    const { i18n } = this.props;
    const { language } = this.state;
    const lang = language === 'en' ? 'pl' : 'en';

    this.setState(() => ({ language: lang }));
    i18n.changeLanguage(lang);
    window.recaptchaOptions.lang = lang;
  };

  render() {
    const { CV: cvClass } = classes;

    return (
      <div className={cvClass}>
        <Layout toggleLanguage={this.toggleLanguage}>
          <Switch>
            <Route path="/contact/success" component={ContactSuccess} />
            <Route path="/portfolio/:project" component={ProjectDetails} />
            <Route path="/:page" component={PageController} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withTranslation('ui')(CV);
