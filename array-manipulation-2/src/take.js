/* exported take */
// i will create a function that thats will create a new array based on how much "count" there is

function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// create an function with 2 parameters
// create an if statement that compares if array.length is = 0, if so return empty array
// create a new array named newArray that is an empty array
// push the current iteration into the new array
// return the new array
