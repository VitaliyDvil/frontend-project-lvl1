import engine from '../index.js';
import randomInteger from '../random-integer.js';

const progressionLength = 10;

function getProgression(progressionStep, firstElement) {
  const progression = [];

  for (let i = 0; progressionLength > i; i += 1) {
    progression.push(firstElement + (progressionStep * i));
  }
  return progression;
}

const gameDescription = 'What number is missing in the progression?';

function generateQuestion() {
  const step = Math.ceil(Math.random() * progressionLength);
  const firstProgressionNumber = Math.ceil(Math.random() * progressionLength);
  const progression = getProgression(step, firstProgressionNumber);
  const hiddenNumberPosition = randomInteger(0, progression.length - 1);

  const rightAnswer = progression[hiddenNumberPosition];

  progression[hiddenNumberPosition] = '..';
  const term = progression.join(' ');

  return {
    rightAnswer,
    term,
  };
}

function getAnswerToShow(question) {
  return question.rightAnswer;
}

function getQuestionToShow(question) {
  return question.term;
}

export default function runProgressionGame() {
  engine(gameDescription, generateQuestion, getAnswerToShow, getQuestionToShow);
}
