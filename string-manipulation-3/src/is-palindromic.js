/* exported isPalindromic */

function isPalindromic(string) {
  var reverse = [];
  var array1 = string.split(' ').join('').split('');
  // console.log('111 string split', array1);
  // console.log('hi', array1.length);

  for (var i = array1.length - 1; i >= 0; i--) {
    reverse.push(array1[i]);
  }
  // console.log('222reverse of th', reverse);
  var sen1 = array1.join('');
  // console.log('111.111', sen1);
  var sen2 = reverse.join('');
  // console.log('222.222', sen2);

  if (sen1 === sen2) {
    // console.log('---same--');
    return true;
  }
  // console.log('--fail--');
  return false;
}

