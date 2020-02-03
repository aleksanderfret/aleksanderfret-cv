import React, { Component } from 'react';

import Contact from '../PageComponents/Contact/Contact';
import Experience from '../PageComponents/CV/Experience/Experience';
import Education from '../PageComponents/CV/Education/Education';
import Skills from '../PageComponents/CV/Skills/Skills';
import Portfolio from '../PageComponents/CV/Portfolio/Portfolio';
import Profile from '../PageComponents/CV/Profile/Profile';
import NotFound from '../PageComponents/NotFound/NotFound';

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
