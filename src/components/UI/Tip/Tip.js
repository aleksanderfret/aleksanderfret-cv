import React, { Component } from 'react';

import Button from 'components/UI/Button/Button';
import FontIcon from 'components/UI/FontIcon/FontIcon';
import classes from './Tip.scss';

class Tip extends Component {
  constructor(props) {
    super(props);
    this.tip = React.createRef();
  }

  componentDidMount() {
    const { closeTip } = this.props;
    document.addEventListener('click', closeTip);
    document.addEventListener('keydown', this.onPressEscape);
    this.tip.current.focus();
  }

  componentWillUnmount() {
    const { closeTip } = this.props;
    document.removeEventListener('click', closeTip);
    document.removeEventListener('keydown', this.onPressEscape);
  }

  onPressEscape = event => {
    const { closeTip } = this.props;
    if (event.code === 'Escape') {
      closeTip();
    }
  };

  render() {
    const { children, closeTip, label } = this.props;
    const { Tip: tipClass, TipWrapper } = classes;

    return (
      <div className={TipWrapper}>
        <div className={tipClass} ref={this.tip}>
          <Button btnType="closeButton" onClick={closeTip} label={label}>
            <FontIcon iconType="close" />
          </Button>
          {children}
        </div>
      </div>
    );
  }
}

export default Tip;
