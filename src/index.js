import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;

function isCorrectAnswer(rightAnswer, userAnswer) {
  if (rightAnswer === userAnswer) {
    return true;
  }
  return false;
}

function engine(
  gameDescription,
  generateQuestionAndAnswer,
) {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const { question, rightAnswer } = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (isCorrectAnswer(rightAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default engine;
