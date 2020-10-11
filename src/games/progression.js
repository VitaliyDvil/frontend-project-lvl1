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

function generateQuestionAndAnswer() {
  const step = randomInteger(1, progressionLength);
  const firstProgressionNumber = randomInteger(1, progressionLength);
  const progression = getProgression(step, firstProgressionNumber);
  const hiddenNumberPosition = randomInteger(0, progression.length - 1);

  const rightAnswer = String(progression[hiddenNumberPosition]);

  progression[hiddenNumberPosition] = '..';
  const question = progression.join(' ');

  return {
    rightAnswer,
    question,
  };
}

export default function runProgressionGame() {
  engine(gameDescription, generateQuestionAndAnswer);
}
