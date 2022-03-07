/* exported truncate */
// I will create a function that will print out each character equal to the length and then add "..." after

function truncate(length, string) {
  return string.slice(0, length).concat('...');
}

// create a function with 2 parameters length and string
// return the slice method on string object with 2 calls, 0, and length, then concat '...'
