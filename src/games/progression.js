import engine from '../index.js';

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

function getGameDescription() {
  return 'What number is missing in the progression?';
}

function generateQuestion() {
  const step = Math.ceil(Math.random() * progressionLength);
  const firstProgressionNumber = Math.ceil(Math.random() * progressionLength);
  const progression = getProgression(step, firstProgressionNumber);
  const hiddenNumberPosition = randomInteger(0, progression.length - 1);

  const answer = progression[hiddenNumberPosition];

  progression[hiddenNumberPosition] = '..';
  const term = progression.join(' ');

  return {
    answer,
    term,
  };
}

function isCorrectAnswer(question, answer) {
  if (Number(question.answer) === Number(answer)) {
    return true;
  }
  return false;
}

function getAnswerToShow(question) {
  return question.answer;
}

function getQuestionToShow(question) {
  return question.term;
}

export default function runProgressionGame() {
  engine(getGameDescription, generateQuestion, isCorrectAnswer, getAnswerToShow, getQuestionToShow);
}
