/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  if (array === []) {
    return [];
  }
  var reversedArray = [];
  for (var i = array.length; i > 0; i--) {
    reversedArray.push(array[i - 1]);
  }

  var newArray = [];
  for (var a = 0; a < count; a++) {
    newArray.push(reversedArray[a]);
  }

  var reversedArray2 = [];
  for (var c = newArray.length; c > 0; c--) {
    reversedArray2.push(newArray[c - 1]);
  }

  return reversedArray2;
}
