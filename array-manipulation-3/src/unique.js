/* exported unique */
function unique(array) {
  // console.log(array);
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i])) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
