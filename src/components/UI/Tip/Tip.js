import React, { Component } from 'react';
import Button from '../Button/Button';
import FontIcon from '../FontIcon/FontIcon';
import classes from './Tip.scss';

class Tip extends Component {

  componentDidMount() {
    document.addEventListener('click', this.props.closeTip);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.closeTip);
  }

  render() {
    return (
      <div className={classes.TipWrapper}>
        <div className={classes.Tip}>
          <Button
            btnType='closeButton'
            clicked={this.props.closeTip}
            label={this.props.label}>
            <FontIcon iconType='close' />
          </Button>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Tip;
