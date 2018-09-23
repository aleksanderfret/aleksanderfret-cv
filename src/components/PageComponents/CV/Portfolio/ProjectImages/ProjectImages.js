import kebabCase from 'lodash/kebabCase';
import aleksanderFret from '../../../../../assets/images/portfolio/aleksander-fret-cv.jpg';
import aleksanderFretDetails from '../../../../../assets/images/details/aleksander-fret-cv.jpg';
import amusementParks from '../../../../../assets/images/portfolio/amusement-parks.jpg';
import amusementParksDetails from '../../../../../assets/images/details/amusement-parks.jpg';
import myReads from '../../../../../assets/images/portfolio/my-reads.jpg';
import myReadsDetails from '../../../../../assets/images/details/my-reads.jpg';
import restaurantReviews from '../../../../../assets/images/portfolio/restaurant-reviews.jpg';
import restaurantReviewsDetails from '../../../../../assets/images/details/restaurant-reviews.jpg';
import arcadeGame from '../../../../../assets/images/portfolio/arcade-game.jpg';
import arcadeGameDetails from '../../../../../assets/images/details/arcade-game.jpg';
import memoryGame from '../../../../../assets/images/portfolio/memory-game.jpg';
import memoryGameDetails from '../../../../../assets/images/details/memory-game.jpg';
import pixelArtMaker from '../../../../../assets/images/portfolio/pixel-art-maker.jpg';
import pixelArtMakerDetails from '../../../../../assets/images/details/pixel-art-maker.jpg';
import wilmat from '../../../../../assets/images/portfolio/wilmat.jpg';
import wilmatDetails from '../../../../../assets/images/details/wilmat.jpg';
import psychotherapist from '../../../../../assets/images/portfolio/psychotherapist.jpg';
import psychotherapistDetails from '../../../../../assets/images/details/psychotherapist.jpg';
import artist from '../../../../../assets/images/portfolio/artist.jpg';
import artistDetails from '../../../../../assets/images/details/artist.jpg';

export const TARGET = {
  PORTFOLIO: 'portfolio',
  DETAILS: 'details'
}

const images = {
  aleksanderFret: {
    [TARGET.PORTFOLIO]: aleksanderFret,
    [TARGET.DETAILS]: aleksanderFretDetails,
  },
  amusementParks: {
    [TARGET.PORTFOLIO]: amusementParks,
    [TARGET.DETAILS]: amusementParksDetails,
  },
  myReads: {
    [TARGET.PORTFOLIO]: myReads,
    [TARGET.DETAILS]: myReadsDetails,
  },
  restaurantReviews: {
    [TARGET.PORTFOLIO]: restaurantReviews,
    [TARGET.DETAILS]: restaurantReviewsDetails,
  },
  arcadeGame: {
    [TARGET.PORTFOLIO]: arcadeGame,
    [TARGET.DETAILS]: arcadeGameDetails,
  },
  memoryGame: {
    [TARGET.PORTFOLIO]: memoryGame,
    [TARGET.DETAILS]: memoryGameDetails,
  },
  pixelArtMaker: {
    [TARGET.PORTFOLIO]: pixelArtMaker,
    [TARGET.DETAILS]: pixelArtMakerDetails,
  },
  wilmat: {
    [TARGET.PORTFOLIO]: wilmat,
    [TARGET.DETAILS]: wilmatDetails,
  },
  psychotherapist: {
    [TARGET.PORTFOLIO]: psychotherapist,
    [TARGET.DETAILS]: psychotherapistDetails,
  },
  artist: {
    [TARGET.PORTFOLIO]: artist,
    [TARGET.DETAILS]: artistDetails,
  },
}

export const getSlug = (index) => {
  const keys = Object.keys(images);
  return kebabCase(keys[index]);
}


export const getImage = (projectId, imageType) => {
  return images[projectId][imageType];
}