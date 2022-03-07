/* exported capitalizeWord */
// I will create a function that capitalizes the first letter with the .toUpperCase() and then lowercase everything else except JavaScript.

function capitalizeWord(word) {
  var first = word[0].toUpperCase();
  var second = word.slice(1).toLowerCase();
  var gg = first.concat(second);

  if (gg === 'Javascript') {
    return 'JavaScript';
  }

  return gg;
}
// create a function named capitalizeWord with 1 parameter, word
// create a variable first and set the first letter to be uppercased
// create a variable called second and remove to first letter and lowercase everything
// concat the first and second variables
// if the combined variable is equal to "Javascript", turn it into JavaScript
// return the final variable
