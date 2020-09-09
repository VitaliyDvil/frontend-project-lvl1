import engine from '../index.js';

function getRigthAnswer(num1, num2, operator) {
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '+') {
    return num1 + num2;
  }
  return num1 * num2;
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getGameDescription() {
  return 'What is the result of the expression?';
}

function generateQuestion() {
  const firstRandomNum = randomInteger(0, 100);
  const secondRandomNum = randomInteger(0, 100);
  const operatorsList = ['-', '+', '*'];
  const randomOperator = operatorsList[Math.floor(Math.random() * operatorsList.length)];
  const expression = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  return {
    firstRandomNum,
    secondRandomNum,
    randomOperator,
    expression,
  };
}

function getQuestionToShow(question) {
  return question.expression;
}

function getAnswerToShow(question) {
  return getRigthAnswer(question.firstRandomNum, question.secondRandomNum, question.randomOperator);
}

function isCorrectAnswer(question, answer) {
  if (Number(getAnswerToShow(question)) === Number(answer)) {
    return true;
  }
  return false;
}

export default function runCalcGame() {
  engine(getGameDescription, generateQuestion, isCorrectAnswer, getAnswerToShow, getQuestionToShow);
}
