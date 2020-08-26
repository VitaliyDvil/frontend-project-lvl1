import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;
const progressionLength = 10;

function getProgression(progressionStep, firstElement) {
  const progression = [];
  progression.push(firstElement);

  for (let i = 1; progressionLength > i; i += 1) {
    progression.push(firstElement + (progressionStep * i));
  }
  return progression;
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function progressionToQuestion(progression, changingPosition) {
  const answer = progression[changingPosition];
  const progressionCopy = [...progression];
  progressionCopy[changingPosition] = '..';
  const question = progressionCopy.join(' ');

  return { question, answer };
}

function isCorrectAnswer(question, answer) {
  if (Number(question) === Number(answer)) {
    return true;
  }
  return false;
}

function progressionGame() {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const step = Math.ceil(Math.random() * progressionLength);
    const firstProgressionNumber = Math.ceil(Math.random() * progressionLength);
    const progression = getProgression(step, firstProgressionNumber);
    const position = randomInteger(0, progression.length - 1);
    const { question, answer } = progressionToQuestion(progression, position);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = answer;

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

export default progressionGame;
