/* exported getLastChar */
// I will create a function that will use the .length-1 property to get the last letter
function getLastChar(string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++) {
    newArray.push(string[i]);
  }
  return newArray[(newArray.length - 1)];
}
// create a function named getLAstChar with parameter string
// create a empty arrray called newArray
// Create a loop that adds every character into the newArray
// return the last character in the array
