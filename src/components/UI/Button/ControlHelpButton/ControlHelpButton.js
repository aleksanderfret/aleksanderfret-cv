import React from 'react';
import Button from '../Button';
import { translate } from 'react-i18next';
import FontIcon from '../../FontIcon/FontIcon';

const controlHelpButton = (props) => {
  return (
    <Button
      btnType='controlHelpButton'
      label={props.t('labels.controlHelpButton', { control: props.label })}
      clicked={props.clicked}
    ><FontIcon iconType='help' />
    </Button>
  );
};

export default translate('ui')(controlHelpButton);
