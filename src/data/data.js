export const getTranslations = (lang) => {
  let language = lang;
  if(!language) {
    language = 'en';
  }
  return fetch(`C:/wamp64/www/aleksanderfret/src/data/${language}.json`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    });
};