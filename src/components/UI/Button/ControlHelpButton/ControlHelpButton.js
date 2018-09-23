import React from 'react';
import Button from '../Button';
import { translate } from 'react-i18next';
import FontIcon from '../../FontIcon/FontIcon';
import * as icons from '../../FontIcon/FontIconTypes/FontIconsTypes';

const controlHelpButton = (props) => {
  return (
    <Button
      btnType='controlHelpButton'
      label={props.t('labels.controlHelpButton', { control: props.label })}
      clicked={props.clicked}
    ><FontIcon iconType={icons.HELP} />
    </Button>
  );
};

export default translate('ui')(controlHelpButton);
