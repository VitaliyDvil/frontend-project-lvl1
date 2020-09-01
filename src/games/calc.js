import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;

function isCorrectAnswer(question, answer) {
  if (question === Number(answer)) {
    return true;
  }
  return false;
}

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

function calcGame() {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const firstRandomNum = randomInteger(0, 100);
    const secondRandomNum = randomInteger(0, 100);
    const operatorsList = ['-', '+', '*'];
    const randomOperator = operatorsList[Math.floor(Math.random() * operatorsList.length)];
    const expression = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;

    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = getRigthAnswer(firstRandomNum, secondRandomNum, randomOperator);

    if (isCorrectAnswer(rightAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`\x1b[31m"${userAnswer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${rightAnswer}"\x1b[0m.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default calcGame;
