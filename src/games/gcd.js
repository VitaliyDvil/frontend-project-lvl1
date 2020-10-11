import engine from '../index.js';
import randomInteger from '../random-integer.js';

function getGcd(a, b) {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
}

const gameDescription = 'Find the greatest common divisor of given numbers.';

function generateQuestionAndAnswer() {
  const firstRandomNum = randomInteger(0, 100);
  const secondRandomNum = randomInteger(0, 100);
  const rightAnswer = String(getGcd(firstRandomNum, secondRandomNum));
  return {
    question: `${firstRandomNum} ${secondRandomNum}`,
    rightAnswer,
  };
}

export default function runGcdGame() {
  engine(gameDescription, generateQuestionAndAnswer);
}
