import React from 'react';
import { withTranslation } from 'react-i18next';

import Button from 'components/UI/Button/Button';
import FontIcon from 'components/UI/FontIcon/FontIcon';
import { HELP } from 'components/UI/FontIcon/FontIconTypes/FontIconsTypes';

const controlHelpButton = ({ clicked, label, t }) => {
  return (
    <Button
      btnType="controlHelpButton"
      label={t('labels.controlHelpButton', { control: label })}
      onClick={clicked}
    >
      <FontIcon iconType={HELP} />
    </Button>
  );
};

export default withTranslation('ui')(controlHelpButton);
