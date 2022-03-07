/* exported omit */
// function omit(source, keys) {
//   // console.log('source', source);
//   console.log('keys', keys);
//   // console.log('1', Object.keys(source));
//   // console.log('2', Object.values(source));
//   // console.log('3', Object.entries(source));

//   var pp33 = Object.entries(source);
//   console.log('1233333', pp33);
//   var gg = Object.keys(source);
//   console.log('converted', gg);

//   // console.log(gg.includes(keys[0]));
//   for (var i = 0; i < keys.length; i++) {
//     console.log('current key name in the loop:', keys[i]);

//     var arrayLocation = gg.indexOf(keys[i]);
//     console.log('current index of array in gg:', arrayLocation);
//     console.log('true or false is key included in source: ', gg.includes(keys[i]));
//     if (gg.includes(keys[i])) {
//       var pp = keys[i];
//       console.log('new target:', pp);
//       console.log(' entering loop, key is included in source, current array', gg);
//       console.log('index where key[i] is found inside source: ', arrayLocation);
//       console.log('whyyyy', keys[arrayLocation]);
//       gg.splice(arrayLocation, 1);
//       console.log('after splice on source current array on source: ', gg);
//       pp33.splice(arrayLocation, 1);
//     }
//   }
//   console.log('final', gg);
//   console.log('------------');
//   console.log(pp33);
//   var aaa = Object.fromEntries(pp33);
//   console.log(aaa);
//   return aaa;
// // }
// }

function omit(source, keys) {

  var pp33 = Object.entries(source);

  var gg = Object.keys(source);

  for (var i = 0; i < keys.length; i++) {

    var arrayLocation = gg.indexOf(keys[i]);

    if (gg.includes(keys[i])) {

      gg.splice(arrayLocation, 1);

      pp33.splice(arrayLocation, 1);
    }
  }

  var aaa = Object.fromEntries(pp33);

  return aaa;
  // }
}
