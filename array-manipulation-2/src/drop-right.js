/* exported dropRight */
function dropRight(array, count) {
  if (count > array.length) {
    return array;
  }
  if (array === []) {
    return [];
  }

  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }

  return newArray;

}
