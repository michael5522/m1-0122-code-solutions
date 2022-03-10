/* eslint-disable no-console */
/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstSplit = firstString.split(' ').join('').split('');
  // console.log(firstSplit);
  var secondSplit = secondString.split(' ').join('').split('');
  // console.log(secondSplit);

  var gg = secondSplit.length;
  var counter = 0;
  var newArray = [];
  for (var a = 0; a < secondSplit.length; a++) {
    if (firstSplit.includes(secondSplit[a])) {
      newArray.push(secondSplit[a]);
    }
  }
  var vital = newArray.length;
  // console.log('vital', newArray.length);
  for (var i = 0; i < secondSplit.length; i++) {
    if (firstSplit.includes(secondSplit[i])) {
      // console.log('it this char is inside the first string---: ', secondSplit[i]);

      for (var k = 0; k < vital; k++) {
        var pp = 0;
        if (firstSplit[k] === secondSplit[i]) {
          // console.log('index', k);
          pp++;
          if (pp === 1) {
            break;
          } else if (firstSplit.splice(k, 1)) {
            counter++;
            // console.log('current counter in loop', counter);
          }
        }
      }
      // console.log('12312321323213 need match', firstSplit[k], secondSplit[i]);
      if (firstSplit.splice(k, 1)) {
        counter++;
        // console.log('current counter in loop', counter);
      }
      // console.log('whats left of original array,', firstSplit);

    }
  }

  if (counter === gg) {
    // console.log('XXXXXXtotal length:', gg, counter);
    // console.log('AAAAAAtotal length:', gg, counter);
    return true;
  }
  // console.log('XXXXXXsfdsafdasffdsfdsaftotal length:', gg, counter);
  // console.log('XXXXXXtotal length:', gg, counter);
  return false;
}
