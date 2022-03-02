/* exported capitalize */
// I will create a new function that will include 2 new arrays.
// In the for loop, I will shoot the first letter to one array and capitalize it
// For the rest, i will shoot it to the second array and lowercase everything in there.
// I will concat those two arrays together and make a string.
function capitalize(word) {
  var letterCap = word[0].toUpperCase();
  // console.log(letterCap);
  var theRest = word.slice(1).toLowerCase();
  // console.log(theRest);
  return (`${letterCap}${theRest}`);
}

// create a function called capitalize with parameter word
// create a variable called letterCap that finds the position of 0 at word and uppercase it
// create a varaible called theRest that slices everything else and lowercases it.
// combine the two variables together to complete the sentence.
