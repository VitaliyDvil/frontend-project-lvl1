import engine from '../index.js';

function isEven(num) {
  return num % 2 === 0;
}

function isCorrectAnswer(question, answer) {
  if (isEven(question) && answer === 'yes') {
    return true;
  }
  if (!isEven(question) && answer === 'no') {
    return true;
  }
  return false;
}

function getRigthAnswer(question) {
  return isEven(question) ? 'yes' : 'no';
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getGameDescription() {
  return 'Answer \x1b[31m"yes"\x1b[0m if the number is even, otherwise answer \x1b[31m"no"\x1b[0m.';
}

function generateQuestion() {
  const randomNumber = randomInteger(0, 100);
  return randomNumber;
}

function getAnswerToShow(question) {
  return getRigthAnswer(question);
}

function getQuestionToShow(question) {
  return question;
}

export default function runParityGame() {
  engine(getGameDescription, generateQuestion, isCorrectAnswer, getAnswerToShow, getQuestionToShow);
}
