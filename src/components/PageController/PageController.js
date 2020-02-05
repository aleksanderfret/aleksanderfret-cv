import React, { Component } from 'react';

import Contact from 'components/PageComponents/Contact/Contact';
import Experience from 'components/PageComponents/CV/Experience/Experience';
import Education from 'components/PageComponents/CV/Education/Education';
import Skills from 'components/PageComponents/CV/Skills/Skills';
import Portfolio from 'components/PageComponents/CV/Portfolio/Portfolio';
import Profile from 'components/PageComponents/CV/Profile/Profile';
import NotFound from 'components/PageComponents/NotFound/NotFound';

class PageController extends Component {
  pages = {
    experience: Experience,
    education: Education,
    skills: Skills,
    portfolio: Portfolio,
    profile: Profile,
    contact: Contact,
    notfound: NotFound
  };

  shouldComponentUpdate(nextProps, nextState) {
    const {
      match: {
        params: { page }
      }
    } = this.props;

    return nextProps.match.params.page !== page;
  }

  render() {
    const {
      match: {
        params: { page }
      }
    } = this.props;
    const ComponentName = this.pages[page] || this.pages.notfound;
    const componentToLoad = <ComponentName />;

    return <>{componentToLoad}</>;
  }
}

export default PageController;
