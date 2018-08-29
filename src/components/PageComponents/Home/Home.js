import React from 'react';
import { translate } from 'react-i18next';
import Button from '../../UI/Button/Button';
import classes from './Home.scss';

const home = (props) => {
  const { t } = props;

  return(
    <div className={classes.Home}>
      <section>
        <figure className={classes.Portrait}>

        </figure>
        <p className={classes.Welcome}>{t('welcome')}</p>
        <p className={classes.Introduction}>{t('introduction')}</p>
      </section>
      <section>
        <p>page tiles</p>
      </section>
      <section>
        <Button
          isDisplayed
          btnType='StandardButton'
          label={t('dowlnoad')}>
          {t('dowlnoad')}
        </Button>
      </section>
    </div>
  );
};

export default translate('home')(home);
