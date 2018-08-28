import React from 'react';
import Contact from '../../containers/Contact/Contact';
import Experience from '../PageComponents/CV/Experience/Experience';
import Education from '../PageComponents/CV/Education/Education';
import Skills from '../PageComponents/CV/Skills/SkillsCategoryList/SkillsCategoryList';
import Portfolio from '../PageComponents/CV/Portfolio/Portfolio';
import Profile from '../PageComponents/CV/Profile/Profile';
import NotFound from '../PageComponents/NotFound/NotFound';

const pageController = (props) => {
  const pages = {
    experience: Experience,
    education: Education,
    skills: Skills,
    portfolio: Portfolio,
    profile: Profile,
    contact: Contact,
    notfound: NotFound
  };


  const ComponentName = pages[props.match.params.page] || pages.notfound;
  const componentToLoad = <ComponentName />;
  return(
    <React.Fragment>
      {componentToLoad}
    </React.Fragment>
  );
};

export default pageController;
