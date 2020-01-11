import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import classes from './Experience.scss';
import Work from './Work/Work';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    const { t } = this.props;
    const { Experience: experienceClass } = classes;

    return (
      <div className={experienceClass}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        <ul>
          {t('works', { returnObjects: true }).map(work => (
            <li key={work.company}>
              <Work {...work} labels={t('labels', { returnObjects: true })} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTranslation('experience')(Experience);
