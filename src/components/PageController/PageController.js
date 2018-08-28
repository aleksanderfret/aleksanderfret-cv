import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Experience from '../CV/Experience/Experience';
import Education from '../CV/Education/Education';
import Skills from '../CV/Skills/SkillsCategoryList/SkillsCategoryList';
import Portfolio from '../CV/Portfolio/Portfolio';
import Profile from '../CV/Profile/Profile';
import Contact from '../../containers/Contact/Contact';

const pageController = (props) => {
  const pages = {
    experience: Experience,
    education: Education,
    skills: Skills,
    portfolio: Portfolio,
    profile: Profile,
    contact: Contact,
  };

  const ComponentName = pages[props.match.params.page];
  const componentToLoad = <ComponentName />;
  return(
    <React.Fragment>
      {componentToLoad}
    </React.Fragment>
  );
};

export default pageController;
