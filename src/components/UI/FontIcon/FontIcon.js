import React from 'react';

const fontIcon = (props) => {
  const icons = {
    language: 'fas fa-language',
    menu: 'fas fa-bars',
    close: 'fas fa-times-circle',
    profile: 'fas fa-user',
    experience: 'fas fa-briefcase',
    education: 'fas fa-graduation-cap',
    skills: 'fas fa-check-circle',
    portfolio: 'fas fa-file-code',
    contact: 'fas fa-envelope',
    linkedin: 'fab fa-linkedin-in',
    github: 'fab fa-github',
    twitter: 'fab fa-twitter',
    bitbucket: 'fab fa-bitbucket',
  }

  const iconClasses = [];

  if (icons[props.iconType]) {
    iconClasses.push(icons[props.iconType]);
  }

  return(
    <i className={iconClasses.join(' ')}></i>
  );
};

export default fontIcon;
