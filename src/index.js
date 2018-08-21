import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    //ns: [],
    resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      pl: {
          common: common_pl
      },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
registerServiceWorker();
