/* exported defaults */
function defaults(target, source) {
  var sourceKeys = Object.keys(source);
  // console.log('source keys: ', sourceKeys);
  var sourceValues = Object.values(source);
  // console.log('source values: ', sourceValues);
  var targetKeys = Object.keys(target);
  // console.log('target keys: ', targetKeys);

  // console.log('source keys length: ', sourceKeys.length);
  for (var i = 0; i < sourceKeys.length; i++) {
    // var pp = sourceKeys[i];
    // console.log('current pp:', pp);
    if (targetKeys.includes(sourceKeys[i])) {
      // console.log('target already includes source key[i]');
      continue;
    } else {
      target[sourceKeys[i]] = sourceValues[i];
    }
  }
  // console.log('final target', target);
  // console.log('-----------');
}
