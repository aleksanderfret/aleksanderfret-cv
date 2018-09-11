import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import Tip from '../Tip/Tip';
import capitalize from 'lodash/capitalize';
import Button from '../Button/Button';
import FontIcon from '../FontIcon/FontIcon';

import classes from './FormControl.scss';


class FormControl extends Component {
  state = {
    checked: false
  }

  getControlClasses = () => {
    let controlClasses = [];
    if (this.props.type === 'input') {
      controlClasses.push(classes[capitalize(this.props.subtype)]);
    } else {
      controlClasses.push(classes[capitalize(this.props.type)]);
    }

    if (this.props.required) {
      controlClasses.push(classes.Required);
    }

    if (this.props.help) {
      controlClasses.push(classes.Help);
    }

    if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
      controlClasses.push(classes.Invalid);
    }

    return controlClasses.join(' ');
  }

  getFormControl = () => {
    let controlFunction;
    if (this.props.type === 'input') {
      controlFunction = this.controls[this.props.subtype];
      if (!controlFunction) {
        controlFunction = this.controls.input;
      }
    } else {
      controlFunction = this.controls[this.props.type];
    }
    return controlFunction ? controlFunction() : null;
  }

  getFormControlLabel = () => {
    const labelClasses = [classes.Label];
    if (this.props.required) {
      labelClasses.push(classes.Required);
    }

    let controlLabel = this.props.t(this.props.label);
    if (controlLabel.indexOf('</1>') !== -1) {
      controlLabel = (
        <Trans i18nKey={this.props.label}>
          Tresc <Button btnType='linkButton' clicked={(event) => { this.props.openTip(event, this.props.id) }}>link</Button>
        </Trans>
      );
    }

    let labelClicked = null;
    if (this.props.subtype === 'checkbox') {
      labelClicked = (event) => { this.labelClickedHnadler(event, this.props.name) };
    }
    return (
      <label
        onClick={labelClicked}
        htmlFor={this.props.name}
        className={labelClasses.join(' ')}>{controlLabel}
      </label>
    );
  }

  getTipContent = () => {
    let tipMessage = null;
    const help = this.props.help;
    const rodo = this.props.rodo;
    if (help) {
      tipMessage = <p>{this.props.t(help)}</p>
    }
    if (rodo) {
      tipMessage = this.props.t(
        rodo,
        { returnObjects: true }
      ).map((message, index) => (
        <p key={index}>{message}</p>
      ));
    }
    return tipMessage;
  }

  createInputControl = () => {
    return (
      <React.Fragment>
        {this.props.label &&
          this.getFormControlLabel()
        }
        <input
          className={this.getControlClasses()}
          id={this.props.name}
          value={this.props.value}
          type={this.props.subtype}
          name={this.props.name}
          onChange={this.props.changed} />
      </React.Fragment>
    )
  }

  createTextareaControl = () => {
    return (
      <React.Fragment>
        {this.props.label &&
          this.getFormControlLabel()
        }
        <textarea
          className={this.getControlClasses()}
          id={this.props.name}
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.changed} >
        </textarea>
      </React.Fragment>
    )
  }

  createCheckboxControl = () => {
    return (
      <React.Fragment>
        <span
          className={this.getControlClasses()}
          name={this.props.name}
          id={this.props.name}
          role={this.props.subtype}
          checked={this.state.checked}
          aria-checked={this.state.checked}
          tabIndex="0"
          value={this.props.value}
          aria-labelledby={`${this.props.name}`}
          onClick={(event) => { this.checkboxClickHandler(event, this.props.name) }}>
          {this.state.checked && <FontIcon iconType='ok' />}
        </span>
        {this.props.label &&
          this.getFormControlLabel()
        }
      </React.Fragment>
    )
  }

  createCaptchaControl = () => {
    return (
      <div>captcha</div>
    );
  }

  controls = {
    input: this.createInputControl,
    textarea: this.createTextareaControl,
    checkbox: this.createCheckboxControl,
    captcha: this.createCaptchaControl,
  };

  checkboxClickHandler = (event, id) => {
    this.setState(prevState => ({ checked: !prevState.checked }));
    this.props.changed(event, id);
  }

  getTipContent = (id) => {
    let tipMessage = null;
    if (this.props.help) {
      tipMessage = <p>{this.props.t(this.props.help)}</p>
    }
    if (this.props.rodo) {
      tipMessage = this.props.t(
        this.props.rodo,
        { returnObjects: true }
      ).map((message, index) => (
        <p key={index}>{message}</p>
      ));
    }
    return tipMessage;
  }

  labelClickedHnadler = (event, id) => {
    event.preventDefault();
    this.checkboxClickHandler(event, id);
  }

  render() {
    let validationError = null;
    if (this.props.invalid && this.props.touched) {
      validationError = <div className={classes.ErrorMessage}>{this.props.t(this.props.error)}</div>;
    }

    let formControl = this.getFormControl();

    return (
      <div className={classes.FormControl}>
        {formControl}
        {this.props.help &&
          <Button
            btnType='controlHelpButton'
            label='pomoc'
            clicked={(event) => { this.props.openTip(event) }}>
            <FontIcon iconType='help' />
          </Button>
        }
        {this.props.isTipOpen &&
          <Tip
            closeTip={this.props.closeTip}>
            {this.getTipContent()}</Tip>
        }
        {validationError}
      </div>
    );
  }
};

export default translate('contact')(FormControl);
