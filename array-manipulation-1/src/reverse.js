/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length; i > 0; i--) {
    newArray.push(array[i - 1]);
  }
  return newArray;
}
