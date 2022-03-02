/* exported getValues */
function getValues(object) {
  var values = [];
  for (var val in object) {
    values.push(object[val]);
  }
  return values;
}
