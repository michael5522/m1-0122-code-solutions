/* exported isVowel */
function isVowel(char) {
  var charA = char.toUpperCase();
  if (charA === 'A' || charA === 'E' || charA === 'I' || charA === 'O' || charA === 'U') {
    return true;
  }
  return false;
}
