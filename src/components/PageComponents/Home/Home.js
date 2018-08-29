import React from 'react';
import { translate } from 'react-i18next';
import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import PageTiles from './PageTiles/PageTiles';
import classes from './Home.scss';
import afretImg from '../../../assets/images/aleksander-fret.jpg';


const home = (props) => {
  const { t } = props;
  return(
    <div className={classes.Home}>
      <section>
        <div className={classes.Portrait}>
          <div className={classes.Dialog}>
            <span className={classes.Welcome}>{t('welcome')}</span>
          </div>
          <Image
            src={afretImg.src}
            srcSet={afretImg.srcSet}
            sizes='(min-width: 1000px) 33vw, (min-width: 600px) 50vw, 100vw'
            alt={t('imageAlt')}
            imageClass='Portrait'/>
        </div>
        <p className={classes.Introduction}>{t('introduction')}</p>
      </section>
      <section>
        <PageTiles />
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
