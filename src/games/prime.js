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

const gameDescription = 'Answer \x1b[31m"yes"\x1b[0m if given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.';

function generateQuestion() {
  const randomNumber = randomInteger(0, 100);
  const rightAnswer = getRigthAnswer(randomNumber);
  return {
    randomNumber,
    rightAnswer,
  };
}

function getAnswerToShow(question) {
  return question.rightAnswer;
}

function getQuestionToShow(question) {
  return question.randomNumber;
}

export default function runPrimeGame() {
  engine(gameDescription, generateQuestion, getAnswerToShow, getQuestionToShow);
}
