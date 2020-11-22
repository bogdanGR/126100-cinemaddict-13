import {getRandomInteger, getRandomItemFromArray, getRandomItems} from "../utils";
import dayjs from "dayjs";

const MIN_RATING = 1;
const MAX_RATING = 10;
const MIN_DURATION_MINUTES = 10;
const MAX_DURATION_MINUTES = 59;
const generateTitleOfFilm = () => {
  const filmsTitles = [
    `Greta`,
    `The Godfather`,
    `The Shawshank Redemption`,
    `Pulp Fiction`,
    `Star Wars`,
    `The Dark Knight`,
    `The Godfather Part II`,
    `The Matrix`,
    `Schindler's List`,
    `Fight Club`,
    `Back to the Future`,
    `Titanic`,
    `Taxi Driver`,
    `The Terminator`,
    `Terminator 2: Judgment Day`
  ];
  const randomIndex = getRandomInteger(0, filmsTitles.length - 1);

  return filmsTitles[randomIndex];
};
const generatePosters = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ];
  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};
const genre = [
  `Musical`,
  `Comedy`,
  `Action`,
  `Dramma`,
  `Thriler`
];
const generateDescription = () => {
  const descriptionOfFilm = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget,`,
    `sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`
  ];

  const randomIndex = getRandomInteger(0, descriptionOfFilm.length - 1);

  return descriptionOfFilm[randomIndex];
};

const generateDate = () => {
  const maYearssGap = 7;
  const daysGap = getRandomInteger(-maYearssGap, maYearssGap);

  return dayjs().add(daysGap, `year`).toDate();
};
const filmComments = [
  {
    img: `smile.png`,
    text: `Interesting setting and a good cast`,
    author: `Tim Macoveev`,
    date: generateDate(),
  },
  {
    img: `sleeping.png`,
    text: `Booooooooooring`,
    author: `John Doe`,
    date: generateDate(),
  },
  {
    img: `puke.png`,
    text: `Almost two hours? Seriously?`,
    author: `John Doe`,
    date: generateDate(),
  }
];
const directors = [
  `David Lynch`,
  `Martin Scorsese`,
  `Steven Soderbergh`,
  `Terrence Malick`,
  `Abbas Kiarostami`
];
const writers = [
  `Errol Morris`,
  `Hayao Miyazaki`,
  `David Cronenberg`,
  `Terence Davies`,
  `Lukas Moodysson`,
];
const actors = [
  `Robert De Niro`,
  `Jack Nicholson`,
  `Marlon Brando`,
  ` Tom Hanks`,
  `Leonardo DiCaprio`
];
const countries = [
  `USA`,
  `Russia`,
  `Greece`,
  `France`,
  `Spain`
];
const ageRestrictions = [
  12,
  14,
  16,
  18
];
export const getFilmCard = () => ({
  title: generateTitleOfFilm(),
  poster: generatePosters(),
  descriptions: generateDescription(),
  genre: new Set(getRandomItems(genre)),
  rating: getRandomInteger(MIN_RATING, MAX_RATING),
  year: generateDate(),
  comments: filmComments,
  isInWatchList: Boolean(getRandomInteger(0, 1)),
  isWatched: Boolean(getRandomInteger(0, 1)),
  isFavorite: Boolean(getRandomInteger(0, 1)),
  duration: `${getRandomInteger(1, 2)}h ${getRandomInteger(MIN_DURATION_MINUTES, MAX_DURATION_MINUTES)}m`,
  director: getRandomItemFromArray(directors),
  writer: new Set(getRandomItems(writers)),
  actor: new Set(getRandomItems(actors)),
  country: getRandomItemFromArray(countries),
  ageRestriction: getRandomItemFromArray(ageRestrictions)

});
