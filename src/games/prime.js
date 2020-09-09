import engine from '../index.js';

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

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getRigthAnswer(num) {
  return isPrime(num) ? 'yes' : 'no';
}

function isCorrectAnswer(question, answer) {
  if (isPrime(question) && answer === 'yes') {
    return true;
  }
  if (!isPrime(question) && answer === 'no') {
    return true;
  }
  return false;
}

function getGameDescription() {
  return 'Answer \x1b[31m"yes"\x1b[0m if given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.';
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

export default function runPrimeGame() {
  engine(getGameDescription, generateQuestion, isCorrectAnswer, getAnswerToShow, getQuestionToShow);
}
