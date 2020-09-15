import engine from '../index.js';
import randomInteger from '../random-integer.js';

function getRigthAnswer(num1, num2, operator) {
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '+') {
    return num1 + num2;
  }
  return num1 * num2;
}

const gameDescription = 'What is the result of the expression?';

function generateQuestion() {
  const firstRandomNum = randomInteger(0, 100);
  const secondRandomNum = randomInteger(0, 100);
  const operators = ['-', '+', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  const rightAnswer = getRigthAnswer(firstRandomNum, secondRandomNum, randomOperator);
  return {
    firstRandomNum,
    secondRandomNum,
    randomOperator,
    expression,
    rightAnswer,
  };
}

function getQuestionToShow(question) {
  return question.expression;
}

function getAnswerToShow(question) {
  return question.rightAnswer;
}

export default function runCalcGame() {
  engine(gameDescription, generateQuestion, getAnswerToShow, getQuestionToShow);
}
