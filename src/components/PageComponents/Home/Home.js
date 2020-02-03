import React from 'react';
import { withTranslation } from 'react-i18next';

import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import CvLinks from './CvLinks/CvLinks';
import classes from './Home.scss';
import afretImg from '../../../assets/images/aleksander-fret.jpg';
import enCV from '../../../assets/cv/aleksander_fret_cv_en.pdf';
import plCV from '../../../assets/cv/aleksander_fret_cv_pl.pdf';

const home = props => {
  const { t } = props;
  const { Dialog, Home: homeClass, Introduction, Portrait, Welcome } = classes;
  const { src, srcSet } = afretImg;

  return (
    <div className={homeClass}>
      <section>
        <div className={Dialog}>
          <span className={Welcome}>{t('welcome')}</span>
        </div>
        <div className={Portrait}>
          <Image
            src={src}
            srcSet={srcSet}
            sizes="(min-width: 1000px) 33vw, (min-width: 600px) 50vw, 100vw"
            alt={t('imageAlt')}
            imageClass="Portrait"
          />
        </div>
        <div className={Introduction}>
          {t('introduction', { returnObjects: true }).map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section>
        <CvLinks />
      </section>
      <section>
        <Button
          clicked={() => {
            const cv = props.i18n.language === 'pl' ? plCV : enCV;
            window.open(cv);
          }}
          isDisplayed
          btnType="StandardButton"
          label={t('download')}
        >
          {t('download')}
        </Button>
      </section>
    </div>
  );
};

export default withTranslation('home')(home);
