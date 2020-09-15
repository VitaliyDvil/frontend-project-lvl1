import engine from '../index.js';
import randomInteger from '../random-integer.js';

function isEven(num) {
  return num % 2 === 0;
}

function getRigthAnswer(question) {
  return isEven(question) ? 'yes' : 'no';
}

const gameDescription = 'Answer \x1b[31m"yes"\x1b[0m if the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';

function generateQuestion() {
  const randomNumber = randomInteger(0, 100);
  const rightAnwer = getRigthAnswer(randomNumber);
  return {
    randomNumber,
    rightAnwer,
  };
}

function getAnswerToShow(question) {
  return question.rightAnwer;
}

function getQuestionToShow(question) {
  return question.randomNumber;
}

export default function runParityGame() {
  engine(gameDescription, generateQuestion, getAnswerToShow, getQuestionToShow);
}
