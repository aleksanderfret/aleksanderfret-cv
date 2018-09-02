import React from 'react';
import { translate } from 'react-i18next';
import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import PageTiles from './PageTiles/PageTiles';
import classes from './Home.scss';
import afretImg from '../../../assets/images/aleksander-fret.jpg';
import enCV from '../../../assets/cv/aleksander_fret_cv_en.pdf';
import plCV from '../../../assets/cv/aleksander_fret_cv_pl.pdf';

const home = (props) => {
  const { t } = props;
  return(
    <div className={classes.Home}>
      <section>
          <div className={classes.Dialog}>
            <span className={classes.Welcome}>{t('welcome')}</span>
          </div>
        <div className={classes.Portrait}>
          <Image
            src={afretImg.src}
            srcSet={afretImg.srcSet}
            sizes='(min-width: 1000px) 33vw, (min-width: 600px) 50vw, 100vw'
            alt={t('imageAlt')}
            imageClass='Portrait'/>
        </div>
        <div className={classes.Introduction}>
          {t('introduction', {returnObjects: true}).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

        </div>
      </section>
      <section>
        <PageTiles />
      </section>
      <section>
        <Button
          clicked={() => {
            const cv = props.i18n.language === 'pl' ? plCV : enCV;
            window.open(cv);
          }}
          isDisplayed
          btnType='StandardButton'
          label={t('download')}>
          {t('download')}
        </Button>
      </section>
    </div>
  );
};

export default translate('home')(home);
