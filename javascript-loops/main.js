/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// 4
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

// 7
function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

// 9
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

// 13
function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

// 15
function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var gg = numbers[i] * 2;
    doubled.push(gg);
  }
  return doubled;
}

// 18
function getKeys(object) {
  var keys = [];
  for (var gg in object) {
    keys.push(gg);
  }
  return keys;
}

// 20
function getValues(object) {
  var values = [];
  for (var gg in object) {
    values.push(object[gg]);
  }
  return values;
}
