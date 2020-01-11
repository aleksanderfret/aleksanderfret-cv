import React from 'react';
import { withTranslation } from 'react-i18next';

import Button from '../Button';
import FontIcon from '../../FontIcon/FontIcon';
import { HELP } from '../../FontIcon/FontIconTypes/FontIconsTypes';

const controlHelpButton = ({ clicked, label, t }) => {
  return (
    <Button
      btnType="controlHelpButton"
      label={t('labels.controlHelpButton', { control: label })}
      clicked={clicked}
    >
      <FontIcon iconType={HELP} />
    </Button>
  );
};

export default withTranslation('ui')(controlHelpButton);
