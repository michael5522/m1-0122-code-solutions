/* exported zip */
function zip(first, second) {
  var firstLength = first.length;
  var secondLength = second.length;
  // console.log(firstLength, secondLength);
  var finalLength = null;
  if (firstLength > secondLength) {
    finalLength = secondLength;
  } else {
    finalLength = secondLength;
  }

  if (secondLength > firstLength) {
    finalLength = firstLength;
  } else {
    finalLength = secondLength;
  }
  // console.log('final length: ', finalLength);

  var newArray = [];

  for (var i = 0; i < finalLength; i++) {
    var newArray2 = [];
    newArray2.push(first[i], second[i]);
    // console.log(newArray2);
    newArray.push(newArray2);
  }

  // console.log(newArray);
  return newArray;
}
