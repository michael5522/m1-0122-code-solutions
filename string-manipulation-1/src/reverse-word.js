/* exported reverseWord */
function reverseWord(word) {
  var newArray = [];
  for (var i = 0; i < word.length; i++) {
    newArray.push(word[i]);
  }

  var finalArray = [];
  for (var a = newArray.length; a > 0; a--) {
    finalArray.push((newArray[a - 1]));
  }

  var gg = finalArray.join('');
  return gg;
}
