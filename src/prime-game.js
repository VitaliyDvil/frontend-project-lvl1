import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;

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
  if (question === answer) {
    return true;
  }
  return false;
}

function primeGame() {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const randomNumber = randomInteger(0, 100);

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = getRigthAnswer(randomNumber);
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

export default primeGame;
