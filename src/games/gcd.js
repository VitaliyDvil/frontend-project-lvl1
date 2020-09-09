import engine from '../index.js';

function getRigthAnswer(a, b) {
  if (b === 0) {
    return Math.abs(a);
  }
  return getRigthAnswer(b, a % b);
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getGameDescription() {
  return 'Find the greatest common divisor of given numbers.';
}

function generateQuestion() {
  const firstRandomNum = randomInteger(0, 100);
  const secondRandomNum = randomInteger(0, 100);
  return {
    toShow: [firstRandomNum, secondRandomNum],
    firstRandomNum,
    secondRandomNum,
  };
}

function getAnswerToShow(question) {
  return getRigthAnswer(question.firstRandomNum, question.secondRandomNum);
}

function getQuestionToShow(question) {
  return question.toShow.join(' ');
}

function isCorrectAnswer(question, answer) {
  if (Number(getAnswerToShow(question)) === Number(answer)) {
    return true;
  }
  return false;
}

export default function runGcdGame() {
  engine(getGameDescription, generateQuestion, isCorrectAnswer, getAnswerToShow, getQuestionToShow);
}
