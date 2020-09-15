import readlineSync from 'readline-sync';

const numOfRigthAnswers = 3;

function isCorrectAnswer(question, answer) {
  return String(question) === answer;
}

function engine(
  gameDescription,
  generateQuestion,
  getAnswerToShow,
  getQuestionToShow,
) {
  console.log('Welcome to the brain games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let numOfQuestion = 1; numOfQuestion <= numOfRigthAnswers; numOfQuestion += 1) {
    const question = generateQuestion();
    const questionToShow = getQuestionToShow(question);
    const rightAnswer = getAnswerToShow(question);
    console.log(`Question: ${questionToShow}`);

    const userAnswer = readlineSync.question('Your answer:');

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

export default engine;
