import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;

function isEven(num) {
  return num % 2 === 0;
}

function isCorrectAnswer(question, answer) {
  if (isEven(question) && answer === 'yes') {
    return true;
  }
  if (!isEven(question) && answer === 'no') {
    return true;
  }
  return false;
}

function getRigthAnswer(question) {
  return isEven(question) ? 'yes' : 'no';
}

function parityGame() {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('Answer \x1b[31m"yes"\x1b[0m if the number is even, otherwise answer \x1b[31m"no"\x1b[0m.');

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const randomNumber = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = getRigthAnswer(randomNumber);

    if (isCorrectAnswer(randomNumber, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`\x1b[31m"${userAnswer}"\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m"${rightAnswer}"\x1b[0m.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default parityGame;
