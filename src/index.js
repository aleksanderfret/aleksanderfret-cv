import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import CV from './components/CV/CV';
import commonEn from './translations/en/common.json';
import contactEn from './translations/en/contact.json';
import educationEn from './translations/en/education.json';
import experienceEn from './translations/en/experience.json';
import homeEn from './translations/en/home.json';
import portfolioEn from './translations/en/portfolio.json';
import profileEn from './translations/en/profile.json';
import skillsEn from './translations/en/skills.json';
import uiEn from './translations/en/ui.json';
import commonPl from './translations/pl/common.json';
import contactPl from './translations/pl/contact.json';
import educationPl from './translations/pl/education.json';
import experiencePl from './translations/pl/experience.json';
import homePl from './translations/pl/home.json';
import portfolioPl from './translations/pl/portfolio.json';
import profilePl from './translations/pl/profile.json';
import skillsPl from './translations/pl/skills.json';
import uiPl from './translations/pl/ui.json';
import './scss/index.scss';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      ui: uiEn,
      common: commonEn,
      contact: contactEn,
      education: educationEn,
      experience: experienceEn,
      home: homeEn,
      portfolio: portfolioEn,
      profile: profileEn,
      skills: skillsEn
    },
    pl: {
      ui: uiPl,
      common: commonPl,
      contact: contactPl,
      education: educationPl,
      experience: experiencePl,
      home: homePl,
      portfolio: portfolioPl,
      profile: profilePl,
      skills: skillsPl
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <CV />
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
