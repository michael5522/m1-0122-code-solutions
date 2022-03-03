/* exported chunk */
function chunk(array, size) {
  var array2 = [];
  for (var i = 0; i < array.length; i += size) {
    array2.push(array.slice(i, i + size));
  }
  return array2;
}
