// /* exported pick */
// function pick(source, keys) {

//   // console.log('source', source);
//   // console.log('key', keys);
//   // console.log('333', source.foo);
//   // if (source.baz) {
//   //   console.log('yoyoyo');
//   // }
//   // console.log('444', keys[1]);
//   var gg = {};
//   for (var i = 0; i < keys.length; i++) {
//     if (source[keys[i]]) {
//       // console.log('current locaton', source[keys[i]]);
//       gg[[keys[i]]] = source[keys[i]];
//     }
//   }
//   console.log('final answer', gg);
//   return gg;
// }

// function pick(source, keys) {
//   var gg = {};
//   for (var i = 0; i < keys.length; i++) {
//     if (typeof source[keys[i]] === 'undefined') {
//       continue;
//     }
//     if (source[keys[i]]) {
//       gg[[keys[i]]] = source[keys[i]];
//     }
//   }
//   console.log('final answer', gg);
//   return gg;
// }

// eslint-disable-next-line no-unused-vars
function pick(source, keys) {
  var gg = {};
  for (var i = 0; i < keys.length; i++) {
    if (typeof source[keys[i]] === 'undefined') {
      continue;
    } else {
      gg[keys[i]] = source[keys[i]];
    }
  }
  // console.log('final answer', gg);
  return gg;
}
