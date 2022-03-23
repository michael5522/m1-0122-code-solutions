/* exported difference */
function difference(first, second) {
  var newArray = [];
  // console.log(first, second);
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j])) {
      continue;
    } else {
      newArray.push(second[j]);
    }
  }
  // console.log('final array---', newArray);
  return newArray;
}
