import engine from '../index.js';
import randomInteger from '../random-integer.js';

function isEven(num) {
  return num % 2 === 0;
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateQuestionAndAnswer() {
  const question = randomInteger(0, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    rightAnswer,
  };
}

export default function runParityGame() {
  engine(gameDescription, generateQuestionAndAnswer);
}
