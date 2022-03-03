/* eslint-disable no-console */
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var gg = string.split('');
  // console.log('111', gg);

  var first = gg[secondIndex];
  var second = gg[firstIndex];

  gg[firstIndex] = first;
  gg[secondIndex] = second;
  // console.log('222', first, second);
  // console.log('333', gg.join(''));
  return gg.join('');

}
