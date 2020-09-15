import engine from '../index.js';
import randomInteger from '../random-integer.js';

function getRigthAnswer(a, b) {
  if (b === 0) {
    return Math.abs(a);
  }
  return getRigthAnswer(b, a % b);
}

const gameDescription = 'Find the greatest common divisor of given numbers.';

function generateQuestion() {
  const firstRandomNum = randomInteger(0, 100);
  const secondRandomNum = randomInteger(0, 100);
  const rightAnswer = getRigthAnswer(firstRandomNum, secondRandomNum);
  return {
    toShow: [firstRandomNum, secondRandomNum],
    firstRandomNum,
    secondRandomNum,
    rightAnswer,
  };
}

function getAnswerToShow(question) {
  return question.rightAnswer;
}

function getQuestionToShow(question) {
  return question.toShow.join(' ');
}

export default function runGcdGame() {
  engine(gameDescription, generateQuestion, getAnswerToShow, getQuestionToShow);
}
