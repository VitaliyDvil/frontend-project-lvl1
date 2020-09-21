import engine from '../index.js';
import randomInteger from '../random-integer.js';

function isEven(num) {
  return num % 2 === 0;
}

function getRigthAnswer(question) {
  return isEven(question) ? 'yes' : 'no';
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateQuestionAndAnswer() {
  const randomNumber = randomInteger(0, 100);
  const rightAnswer = getRigthAnswer(randomNumber);
  const question = randomNumber;
  return {
    question,
    rightAnswer,
  };
}

export default function runParityGame() {
  engine(gameDescription, generateQuestionAndAnswer);
}
