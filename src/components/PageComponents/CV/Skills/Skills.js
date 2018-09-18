import React, { Component } from 'react';
import { translate } from 'react-i18next';
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
    return (
      <div className={classes.Skills}>
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
      </div>
    );
  }
}

export default translate('skills')(Skills);
