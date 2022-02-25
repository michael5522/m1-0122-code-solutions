/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var gg = `${words[i]}${suffix}`;
    newArray.push(gg);
  }
  return newArray;
}
