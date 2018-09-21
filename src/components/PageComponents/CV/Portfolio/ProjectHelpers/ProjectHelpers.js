import aleksanderFret from '../../../../../assets/images/aleksander-fret-cv.jpg';
import amusementParks from '../../../../../assets/images/amusement-parks.jpg';
import myReads from '../../../../../assets/images/my-reads.jpg';
import restaurantReviews from '../../../../../assets/images/restaurant-reviews.jpg';
import arcadeGame from '../../../../../assets/images/arcade-game.jpg';
import memoryGame from '../../../../../assets/images/memory-game.jpg';
import pixelArtMaker from '../../../../../assets/images/pixel-art-maker.jpg';
import wilmat from '../../../../../assets/images/wilmat.jpg';
import psychotherapist from '../../../../../assets/images/psychotherapist.jpg';
import artist from '../../../../../assets/images/artist.jpg';

const images = {
  aleksanderFret,
  amusementParks,
  myReads,
  restaurantReviews,
  arcadeGame,
  memoryGame,
  pixelArtMaker,
  wilmat,
  psychotherapist,
  artist,
}

export const getImage = (projectId) => {
  return images[projectId];
}