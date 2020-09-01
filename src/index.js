import calcGame from './games/calc.js';
import gcdGame from './games/gcd.js';
import parityGame from './games/parity.js';
import primeGame from './games/prime.js';
import progressionGame from './games/progression.js';

export default function runGame(name) {
  if (name === 'calc') {
    return calcGame();
  }
  if (name === 'gcd') {
    return gcdGame();
  }
  if (name === 'parity') {
    return parityGame();
  }
  if (name === 'prime') {
    return primeGame();
  }
  if (name === 'progression') {
    return progressionGame();
  }
  return undefined;
}
