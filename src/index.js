import React from 'react';
import ReactDOM from 'react-dom';
//import 'normalize.css';
import './index.scss';
import CV from './containers/CV/CV';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import common_en from "./translations/en/common.json";
import contact_en from "./translations/en/contact.json";
import education_en from "./translations/en/education.json";
import experience_en from "./translations/en/experience.json";
import home_en from "./translations/en/home.json";
import portfolio_en from "./translations/en/portfolio.json";
import profile_en from "./translations/en/profile.json";
import skills_en from "./translations/en/skills.json";
import common_pl from "./translations/en/common.json";
import contact_pl from "./translations/pl/contact.json";
import education_pl from "./translations/pl/education.json";
import experience_pl from "./translations/pl/experience.json";
import home_pl from "./translations/pl/home.json";
import portfolio_pl from "./translations/pl/portfolio.json";
import profile_pl from "./translations/pl/profile.json";
import skills_pl from "./translations/pl/skills.json";
import ui_en from "./translations/en/ui.json";
import ui_pl from "./translations/pl/ui.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        ui: ui_en,
        common: common_en,
        contact: contact_en,
        education: education_en,
        experience: experience_en,
        home: home_en,
        portfolio: portfolio_en,
        profile: profile_en,
        skills: skills_en,
      },
      pl: {
        ui: ui_pl,
        common: common_pl,
        contact: contact_pl,
        education: education_pl,
        experience: experience_pl,
        home: home_pl,
        portfolio: portfolio_pl,
        profile: profile_pl,
        skills: skills_pl,
      },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <CV />
  </I18nextProvider>,
  document.getElementById('root')
);
