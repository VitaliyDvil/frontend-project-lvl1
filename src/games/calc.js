import engine from '../index.js';
import randomInteger from '../random-integer.js';

function getRigthAnswer(num1, num2, operator) {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
}

const gameDescription = 'What is the result of the expression?';

function generateQuestionAndAnswer() {
  const firstRandomNum = randomInteger(0, 100);
  const secondRandomNum = randomInteger(0, 100);
  const operators = ['-', '+', '*'];
  const randomOperator = operators[randomInteger(0, operators.length - 1)];
  const question = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  const rightAnswer = String(getRigthAnswer(firstRandomNum, secondRandomNum, randomOperator));
  return {
    question,
    rightAnswer,
  };
}

export default function runCalcGame() {
  engine(gameDescription, generateQuestionAndAnswer);
}
