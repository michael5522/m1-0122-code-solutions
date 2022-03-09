/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  var counter = 0;
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      counter += 1;
    } else {
      return false;
    }
  }
  if (counter === first.length) {
    return true;
  }
}
