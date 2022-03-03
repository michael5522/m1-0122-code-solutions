/* eslint-disable no-console */
/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  // console.log(lowerCase);
  var gg = lowerCase.split(' ');
  // console.log(gg);
  for (var i = 0; i < gg.length; i++) {
    // console.log('ppp', gg[i]);
    gg[i] = gg[i][0].toUpperCase().concat(gg[i].slice(1));
  }
  // console.log('ult', gg.join(' '));
  return gg.join(' ');
}
