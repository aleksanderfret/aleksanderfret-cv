import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import CV from './components/CV/CV';
import en from './translations/en';
import pl from './translations/pl';
import './scss/index.scss';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: { en, pl }
});

ReactDOM.render(
  <BrowserRouter>
    <CV />
  </BrowserRouter>,
  document.getElementById('root')
);
