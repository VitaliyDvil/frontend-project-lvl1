import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
export function greeting () {
    console.log('Hello, ' + name + '!');
}

