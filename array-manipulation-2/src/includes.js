/* exported includes */
// I will create a function that will seach for a value from the index and see if it matches using the find index method

function includes(array, value) {
  var gg = array.indexOf(value);
  if (gg !== -1) {
    return true;
  }
  return false;
}
// create a function named includes with 2 parameters array and value
// create a new variable called gg equal to the indexof method of th array passing in value
// create an if statement showing if gg is not equal to -1, it would return true, otherwise false
