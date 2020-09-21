import engine from '../index.js';
import randomInteger from '../random-integer.js';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; num >= divisor * divisor; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}

function getRigthAnswer(num) {
  return isPrime(num) ? 'yes' : 'no';
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateQuestionAndAnswer() {
  const randomNumber = randomInteger(0, 100);
  const rightAnswer = getRigthAnswer(randomNumber);
  const question = randomNumber;
  return {
    question,
    rightAnswer,
  };
}

export default function runPrimeGame() {
  engine(gameDescription, generateQuestionAndAnswer);
}
