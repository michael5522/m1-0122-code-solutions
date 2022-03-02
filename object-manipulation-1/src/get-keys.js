/* exported getKeys */
// I will use a for in loop to get the keys out of the object
function getKeys(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(property);
  }
  return newArray;
}

// create a function called getKeys with 1 paramether object
// create a new array called "newArray"
// create a for in loop that loops through object
// use the push method to add all the properties into the array
// return the new array
