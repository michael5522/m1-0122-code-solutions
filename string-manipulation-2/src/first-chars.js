/* eslint-disable no-console */
/* exported firstChars */
function firstChars(length, string) {
  var newArray = [];
  for (var i = 0; i < length; i++) {
    newArray.push(string[i]);
  }
  // console.log('222', newArray);
  var gg2 = newArray.join('');
  // console.log(gg2);
  return gg2;
}
