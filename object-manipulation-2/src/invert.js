/* exported invert */
function invert(source) {
  var keys = Object.keys(source);
  var values = Object.values(source);
  // console.log('1 keys:', keys);
  // console.log('2 values:', values);

  var gg = {};
  for (var i = 0; i < keys.length; i++) {

    gg[values[i]] = keys[i];
  }

  // console.log('final answer', gg);
  return gg;

}
