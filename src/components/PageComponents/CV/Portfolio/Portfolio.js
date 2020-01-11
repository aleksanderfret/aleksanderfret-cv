import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import Project from './Project/Project';
import classes from './Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    const { t } = this.props;
    const { Portfolio: portfolioClass, Projects } = classes;

    return (
      <div className={portfolioClass}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        <ul className={Projects}>
          {t('works', { returnObjects: true }).map(
            ({ name, id, imageAlt, technologies }) => (
              <li key={name}>
                <Project
                  id={id}
                  name={name}
                  imageAlt={imageAlt}
                  technologies={technologies}
                  labels={t('labels', { returnObjects: true })}
                />
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default withTranslation('portfolio')(Portfolio);
