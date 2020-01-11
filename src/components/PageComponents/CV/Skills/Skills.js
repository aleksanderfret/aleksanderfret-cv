import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import SkillsCategory from './SkillsCategory/SkillsCategory';
import classes from './Skills.scss';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    const { t } = this.props;
    const { Skills: skillsClass, SkillsItems } = classes;

    return (
      <div className={skillsClass}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        <ul>
          {t('skills', { returnObjects: true }).map(skills => (
            <li className={SkillsItems} key={skills.type}>
              <SkillsCategory {...skills} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTranslation('skills')(Skills);
