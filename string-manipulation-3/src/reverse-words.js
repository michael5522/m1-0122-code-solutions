/* exported reverseWords */
function reverseWords(string) {
  var wordSplit = string.split(' ');
  // console.log('111', wordSplit);
  // console.log('222', finalArray);

  var final = [];
  for (var i = 0; i < wordSplit.length; i++) {
    // console.log('333', 'it is triggering');
    var gg = wordSplit[i].split('').reverse().join('');
    final.push(gg);
    // console.log('inside loop', final);
  }
  return final.join(' ');
}
