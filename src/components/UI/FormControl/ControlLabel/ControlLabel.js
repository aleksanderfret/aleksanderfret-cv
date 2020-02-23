import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import Button from 'components/UI/Button/Button';
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
  const { Label, Required } = classes;
  const labelClasses = [Label];
  if (required) {
    labelClasses.push(Required);
  }

  const getLabelButton = () => (
    <Trans i18nKey={`contact:${label}`}>
      start
      <Button
        btnType="linkButton"
        onClick={event => {
          event.stopPropagation();
          openTip(event, controlId);
        }}
      >
        {{ value: t(labelButtonValue) }}
      </Button>
      end
    </Trans>
  );

  const labelText = labelButtonValue ? getLabelButton() : t(label);

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
