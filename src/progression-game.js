import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;
const progressionLength = 10;

function getProgression() {
  const progression = [];
  const step = Math.ceil(Math.random() * progressionLength);
  const firstProgressionNumber = Math.ceil(Math.random() * progressionLength);
  progression.push(firstProgressionNumber);

  for (let i = 1; progressionLength > i; i += 1) {
    progression.push(firstProgressionNumber + (step * i));
  }
  return progression;
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function progressionToQuestion(progression) {
  const position = randomInteger(0, progression.length - 1);
  const answer = progression[position];
  const progressionCopy = [...progression];
  progressionCopy[position] = '..';
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
    const progression = getProgression();
    const { question, answer } = progressionToQuestion(progression);

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
