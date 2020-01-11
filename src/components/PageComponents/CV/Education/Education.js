import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import School from './School/School';
import classes from './Education.scss';

class Education extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    const { t } = this.props;
    const { Education: EducationClass } = classes;

    return (
      <div className={EducationClass}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        <ul>
          {t('education', { returnObjects: true }).map(school => (
            <li key={school.name}>
              <School
                {...school}
                labels={t('labels', { returnObjects: true })}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTranslation('education')(Education);
