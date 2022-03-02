/* exported toObject */
function toObject(keyValuePair) {
  var key123 = keyValuePair[0];
  var value = keyValuePair[1];
  return {
    [[key123]]: value
  };
}
