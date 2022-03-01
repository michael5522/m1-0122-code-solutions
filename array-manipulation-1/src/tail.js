/* exported tail */
// I will create a for loop that only reaches the full length of the array and push it to a new array.
// The initiator will be 1 instead of 0.

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);

  }
  return newArray;
}

// define a function named tails, with an argument `array`
// define a variable newArray set to an empty array
// create a for loop  that pushes values into the newArray
// when the loop is complete, return the newArray value
