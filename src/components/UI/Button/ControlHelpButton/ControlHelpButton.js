import React from 'react';
import Button from '../Button';
import { translate } from 'react-i18next';
import FontIcon from '../../FontIcon/FontIcon';

const controlHelpButton = (props) => {
  return (
    <Button
      btnType='controlHelpButton'
      label={props.t('form.helpButton')}
      clicked={props.clicked}
    ><FontIcon iconType='help' />
    </Button>
  );
};

export default translate('contact')(controlHelpButton);
