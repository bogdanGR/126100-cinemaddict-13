const MIN_NUM_OF_ITEMS = 1;
const MAX_NUM_OF_ITEMS = 3;

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const isDeactivateEvent = (evt) => {
  const ESC_KEYCODE = 27;
  return evt.keyCode && evt.keyCode === ESC_KEYCODE;
};
export const getRandomItems = (dataInsert) => {
  let j;
  let temp;
  for (let i = dataInsert.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = dataInsert[j];
    dataInsert[j] = dataInsert[i];
    dataInsert[i] = temp;
  }
  return dataInsert.slice(0, getRandomInteger(MIN_NUM_OF_ITEMS, MAX_NUM_OF_ITEMS));
};
export const getRandomItemFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
