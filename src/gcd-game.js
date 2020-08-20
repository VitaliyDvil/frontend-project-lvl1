import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;

function getRigthAnswer(a, b) {
  if (b === 0) {
    return Math.abs(a);
  }
  return getRigthAnswer(b, a % b);
}

function isCorrectAnswer(question, answer) {
  if (Number(question) === answer) {
    return true;
  }
  return false;
}

function gcdGame() {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const firstRandomNum = Math.floor(Math.random() * 100);
    const secondRandomNum = Math.floor(Math.random() * 100);

    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);

    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = getRigthAnswer(firstRandomNum, secondRandomNum);
    if (isCorrectAnswer(userAnswer, rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`\x1b[31m"${userAnswer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${rightAnswer}"\x1b[0m.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default gcdGame;
