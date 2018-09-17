import React, { Component } from 'react';
import Button from '../Button/Button';
import FontIcon from '../FontIcon/FontIcon';
import classes from './Tip.scss';

class Tip extends Component {
  constructor(props) {
    super(props);
    this.tip = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.props.closeTip);
    document.addEventListener('keydown', this.onPressEscape);
    this.tip.current.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.closeTip);
    document.removeEventListener('keydown', this.onPressEscape);
  }

  onPressEscape = (event) => {
    if (event.keyCode === 27) {
      this.props.closeTip();
    }
  }

  render() {
    return (
      <div
        className={classes.TipWrapper}
      >
        <div className={classes.Tip} ref={this.tip}>
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
