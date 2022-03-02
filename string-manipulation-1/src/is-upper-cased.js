/* exported isUpperCased */
// I will uppercase everything in the string and then compare it to the original, if they are matching then it will be true, else false

function isUpperCased(word) {
  var allCap = word.toUpperCase();
  if (word === allCap) {
    return true;
  } else {
    return false;
  }
}
// created a function called isUpperCased with 1 parameter word
// capitalized everything in word by using the toUpperCase method
// used an if statement to check if they match, if true return true; otherwise return false
