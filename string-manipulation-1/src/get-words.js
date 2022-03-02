/* exported getWords */
function getWords(string) {
  if (string.length === 0) {

    return [];
  }
  var newArray = string.split(' ');

  return newArray;
}
