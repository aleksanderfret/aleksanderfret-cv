import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import Button from '../../Button/Button';
import classes from './ControlLabel.scss';

const controlLabel = ({
  clicked,
  controlId,
  label,
  labelButtonValue,
  openTip,
  required,
  t
}) => {
  const labelClasses = [classes.Label];
  if (required) {
    labelClasses.push(classes.Required);
  }

  const labelButton = (
    <Trans i18nKey={label}>
      start
      <Button
        btnType="linkButton"
        clicked={event => {
          event.stopPropagation();
          openTip(event, controlId);
        }}
      >
        {t(labelButtonValue)}
      </Button>
      end
    </Trans>
  );

  const labelText = labelButtonValue ? labelButton : t(label);

  return (
    <label
      onClick={clicked}
      htmlFor={controlId}
      className={labelClasses.join(' ')}
    >
      {labelText}
    </label>
  );
};

export default withTranslation('contact')(controlLabel);
