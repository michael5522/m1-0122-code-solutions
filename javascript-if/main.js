/* eslint-disable no-console */
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}

// console.log('# 4 under 5?: ', isUnderFive(4));
// // true
// console.log('# 10 under 5?: ', isUnderFive(10));
// // false
// console.log('# 5 under 5?: ', isUnderFive(5));
// // false

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log('even 4?: ', isEven(4));
// console.log('even 10?: ', isEven(10));
// console.log('even 5?: ', isEven(5));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

// console.log('js: ', startsWithJ('JavaScript'));
// console.log('php: ', startsWithJ('PHP'));
// console.log('html: ', startsWithJ('HTML'));
// console.log('java: ', startsWithJ('Java'));
// console.log('kotlin: ', startsWithJ('Kotlin'));
// console.log('C#: ', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH <= 7) {
    return 'acid';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else return 'Goodnight everybody!';
}
