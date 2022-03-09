/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) !== true) {
      // console.log(`is not in an array---- ${array[i]}`);
      newArray.push(array[i]);
    }
    // console.log('array[i] is currently: ', array[i]);
    // console.log('-----');
    if (Array.isArray(array[i])) {
      // console.log('its turn true');
      var gg = array[i];
      // var ggLength = gg.length;
      // console.log(gg);
      // console.log(ggLength);
      for (var a = 0; a < gg.length; a++) {
        newArray.push(gg[a]);
      }
    }
  }
  // console.log('final------', newArray);
  return newArray;
}
