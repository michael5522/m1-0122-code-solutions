/* exported numVowels */
function numVowels(string) {
  var gg = string.toLowerCase().split('');
  var count = 0;
  // console.log('111', gg);
  for (var i = 0; i < gg.length; i++) {
    if (gg[i] === 'a' || gg[i] === 'e' || gg[i] === 'i' || gg[i] === 'o' || gg[i] === 'u') {
      count += 1;
    }
  }
  // console.log('222', count);
  return count;
}
