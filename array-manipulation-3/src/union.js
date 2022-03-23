/* exported union */
function union(first, second) {
  // console.log('1111', first, second);
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.includes(second[j])) {
      continue;
    } else {
      newArray.push(second[j]);
    }
  }

  // console.log('final', newArray);
  return newArray;
}
