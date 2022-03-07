/* exported ransomCase */
// I will create a function that uses a for loop to alternate capitalzing the letter.

function ransomCase(string) {
  var string2 = string.toLowerCase().split('');
  // console.log('111', string2);

  for (var i = 0; i < string2.length; i++) {
    if ((i % 2) === 0) {
      string2[i] = string2[i].toLowerCase();
    } else {
      string2[i] = string2[i].toUpperCase();
    }
  }
  // console.log(string2.join(''));
  return string2.join('');

}

// create a function with 1 parameter, string
// create a variable string2 that lower cases everything and also adds it into an array with .split
// create a for loop that lowercases or uppercases depending on the modulo
// return the array that is turned back into a string

// function ransomCase(string) {
//   var chars = string.toUpperCase().split('');
//   console.log('111', chars);
//   for (var i = 0; i < chars.length; i += 2) {
//     chars[i] = chars[i].toLowerCase();
//   }
//   console.log(chars.join(''));
//   return chars.join('');
// }
