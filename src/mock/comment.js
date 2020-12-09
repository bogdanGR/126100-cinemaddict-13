import {getRandomInteger, getRandomItems} from "../utils/common";
import dayjs from "dayjs";

const sentences = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const getRandomEmotion = () => {
  const emotions = [
    `angry.png`,
    `puke.png`,
    `sleeping.png`,
    `smile.png`
  ];

  const randomIndex = getRandomInteger(0, emotions.length - 1);

  return emotions[randomIndex];
};

const getRandomAuthor = () => {
  const authors = [
    `Tim Macoveev`,
    `John Doe`,
    `George Li`,
    `John Snow`,
    `Bogdan Vaskan`,
  ];
  const randomIndex = getRandomInteger(0, authors.length - 1);

  return authors[randomIndex];
};


const generateDate = () => {
  const maYearssGap = 2;
  const daysGap = getRandomInteger(-maYearssGap, maYearssGap);

  return dayjs().add(daysGap, `year`).toDate();
};

const generateComment = () => {
  return {
    comment: getRandomItems(sentences),
    emotion: getRandomEmotion(),
    author: getRandomAuthor(),
    date: generateDate()
  };
};

export const generateComments = () => {
  return [...Array(getRandomInteger(0, 5))].map(generateComment);
};
