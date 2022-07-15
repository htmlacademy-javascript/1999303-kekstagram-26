const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength();
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let counter = 0;


const NAMES = [
  'Иван',
  'Алексей',
  'Владимир',
  'Никита',
  'Александр',
  'Роман',
  'Дмитрий',
  'Павел',
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTION = [
  'На этом фото кот (условно)',
  'На этом фото селфи друзей (условно)',
  'На этом фото велосипед (условно)',
  'На этом фото пейзаж гор (условно)',
  'На этом фото изображен эрмитаж (условно)',
];
const PHOTOS_AMOUNT = 25;
const generateId = () => counter++;
const createComments = () => ({
  id: generateId(),
  avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
  message: MESSAGE[getRandomIntInclusive (0, MESSAGE.length - 1)],
  name: NAMES[getRandomIntInclusive (0, NAMES.length - 1)],
});
const createDescriptionPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description:  DESCRIPTION[getRandomIntInclusive (0, DESCRIPTION.length - 1)],
  likes: getRandomIntInclusive (15, 200),
  comments: createComments(),
});
const createCommensDescription = (find) => {
  const resultCommens = [];
  for (let j = 1; j <= find; j++) {
    const descriptionCommens = createComments(j);
    resultCommens.push(descriptionCommens);
  }
  return resultCommens;
};
const createPhotosDescriptions = (count) => {
  const result = [];
  for (let i = 1; i <= count; i++) {
    const description = createDescriptionPhoto(i);
    result.push(description);
  }
  return result;
};
createCommensDescription();
createPhotosDescriptions(PHOTOS_AMOUNT);
