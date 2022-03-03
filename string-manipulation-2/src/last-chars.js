/* eslint-disable no-console */
/* exported lastChars */
function lastChars(length, string) {
  var gg = string.split('');
  // console.log('111', gg);
  // console.log('string length', string.length);
  // console.log('length', length);
  var newArray = [];
  for (var i = 0; i < length; i++) {
    newArray.push(gg[(gg.length - 1) - i]);
    // console.log('222', newArray);
  }
  var answer = newArray.slice().reverse().join('');
  // console.log(answer);
  return answer;
}
