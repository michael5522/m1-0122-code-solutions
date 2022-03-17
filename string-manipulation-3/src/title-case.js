/* eslint-disable no-console */
/* exported titleCase */
function titleCase(title) {
  var gg = title.toLowerCase().split(' ');
  var newArray = [];
  for (var i = 0; i < gg.length; i++) {
    var splitting = (gg[i]).split('');
    newArray.push(splitting);
  }
  var finalArray = [];
  for (var j = 0; j < newArray.length; j++) {
    if (newArray[j].join('') === 'javascript') {
      finalArray.push('JavaScript');
    } else if (newArray[j].join('') === 'javascript:') {
      finalArray.push('JavaScript:');
    } else if (newArray[j].join('') === 'api') {
      finalArray.push('API');
    } else if (newArray[j].join('') === 'or' || newArray[j].join('') === 'nor' || newArray[j].join('') === 'but' || newArray[j].join('') === 'a' || newArray[j].join('') === 'and' || newArray[j].join('') === 'as' || newArray[j].join('') === 'at' || newArray[j].join('') === 'by' || newArray[j].join('') === 'for' || newArray[j].join('') === 'in' || newArray[j].join('') === 'of' || newArray[j].join('') === 'on' || newArray[j].join('') === 'per' || newArray[j].join('') === 'to' || newArray[j].join('') === 'the') {
      finalArray.push(newArray[j].join(''));
    } else {
      var xx = newArray[j].join('');
      var pp = xx.charAt(0).toUpperCase() + xx.slice(1);
      finalArray.push(pp);
    }
  }
  var upperCaseTheFirst = finalArray[0].charAt(0).toUpperCase() + finalArray[0].slice(1);
  if (finalArray[0] !== upperCaseTheFirst) {
    finalArray[0] = upperCaseTheFirst;
  }
  var indexBeforeTheDot = null;
  for (var a = 0; a < finalArray.length; a++) {
    if (finalArray[a].includes(':')) {
      indexBeforeTheDot = finalArray.indexOf(finalArray[a]);
    }
  }
  if (indexBeforeTheDot !== null) {
    var upperCaseTheSecond = finalArray[indexBeforeTheDot + 1].charAt(0).toUpperCase() + finalArray[indexBeforeTheDot + 1].slice(1);
    var needThis = null;
    if (finalArray[[indexBeforeTheDot] + 1] !== upperCaseTheSecond) {
      needThis = finalArray.indexOf(finalArray[indexBeforeTheDot + 1]);
    }
    if (needThis) {
      finalArray.splice(needThis, 1, upperCaseTheSecond);
    }
  }
  var indexBeforeTheDash = null;
  var valueIneedToChange = null;
  for (var b = 0; b < finalArray.length; b++) {

    if (finalArray[b].includes('-')) {
      valueIneedToChange = finalArray[b];
      indexBeforeTheDash = finalArray.indexOf(finalArray[b]);
    }
  }
  if (indexBeforeTheDash !== null) {
    var xd = valueIneedToChange.split('');
    var changed = null;
    for (var f = 0; f < xd.length; f++) {
      if (xd[f] === '-') {
        changed = xd.indexOf(xd[f]);
      }
    }
    var boo = xd[changed + 1];
    var boo2 = xd.indexOf(boo);
    xd.splice(boo2, 1, xd[changed + 1].toUpperCase());
    var upperCaseTheDash = xd.join('');
    var needThis2 = null;
    if (finalArray[[indexBeforeTheDash] + 1] !== upperCaseTheDash) {
      needThis2 = finalArray.indexOf(finalArray[indexBeforeTheDash + 1]);
    }
    if (needThis2) {
      finalArray.splice(needThis2 - 1, 1, upperCaseTheDash);
    }
  }
  return finalArray.join(' ');
}

/* eslint-disable no-console */
/* exported titleCase */
// function titleCase(title) {
//   console.log(title);
//   var gg = title.toLowerCase().split(' ');
//   // console.log('111', gg);
//   var newArray = [];
//   // console.log('222 length', gg.length);
//   for (var i = 0; i < gg.length; i++) {
//     var splitting = (gg[i]).split('');
//     newArray.push(splitting);
//   }
//   console.log('new array', newArray);

//   var finalArray = [];
//   for (var j = 0; j < newArray.length; j++) {
//     console.log(newArray[j].join(''));
//     if (newArray[j].join('') === 'javascript') {
//       finalArray.push('JavaScript');
//     } else if (newArray[j].join('') === 'javascript:') {
//       finalArray.push('JavaScript:');
//     } else if (newArray[j].join('') === 'api') {
//       finalArray.push('API');
//     } else if (newArray[j].join('') === 'or' || newArray[j].join('') === 'nor' || newArray[j].join('') === 'but' || newArray[j].join('') === 'a' || newArray[j].join('') === 'and' || newArray[j].join('') === 'as' || newArray[j].join('') === 'at' || newArray[j].join('') === 'by' || newArray[j].join('') === 'for' || newArray[j].join('') === 'in' || newArray[j].join('') === 'of' || newArray[j].join('') === 'on' || newArray[j].join('') === 'per' || newArray[j].join('') === 'to' || newArray[j].join('') === 'the') {
//       finalArray.push(newArray[j].join(''));
//     } else {
//       var xx = newArray[j].join('');
//       var pp = xx.charAt(0).toUpperCase() + xx.slice(1);
//       finalArray.push(pp);
//     }
//   }

//   var upperCaseTheFirst = finalArray[0].charAt(0).toUpperCase() + finalArray[0].slice(1);

//   if (finalArray[0] !== upperCaseTheFirst) {
//     finalArray[0] = upperCaseTheFirst;
//   }

//   console.log('final array---', finalArray);

//   console.log('final array length:', finalArray.length);
//   var indexBeforeTheDot = null;
//   for (var a = 0; a < finalArray.length; a++) {
//     // console.log(finalArray[a]);
//     if (finalArray[a].includes(':')) {
//       console.log('hello you include :', finalArray[a]);
//       console.log(finalArray.indexOf(finalArray[a]));
//       indexBeforeTheDot = finalArray.indexOf(finalArray[a]);
//     }
//   }
//   if (indexBeforeTheDot !== null) {
//     console.log('index of my pp-----', indexBeforeTheDot);
//     var upperCaseTheSecond = finalArray[indexBeforeTheDot + 1].charAt(0).toUpperCase() + finalArray[indexBeforeTheDot + 1].slice(1);
//     console.log('what i will be replacing it with:-----', upperCaseTheSecond);
//     var needThis = null;
//     if (finalArray[[indexBeforeTheDot] + 1] !== upperCaseTheSecond) {
//       console.log('asdfadsfdfsadfdsfdff no the same');
//       console.log('xxxx where:', finalArray.indexOf(finalArray[indexBeforeTheDot + 1]));
//       needThis = finalArray.indexOf(finalArray[indexBeforeTheDot + 1]);
//       console.log('need this for index', needThis);
//       console.log('replacing with this', upperCaseTheSecond);
//       // SPLICE IT AND THEN REPLACE IT IT'LL WORK
//     }
//     if (needThis) {
//       console.log('123123 getting triggered', needThis);
//       finalArray.splice(needThis, 1, upperCaseTheSecond);
//       console.log(finalArray);
//     }
//   }

//   //
//   console.log('------------------------------------------');
//   console.log('final array---', finalArray);

//   console.log('final array length:', finalArray.length);
//   var indexBeforeTheDash = null;
//   var valueIneedToChange = null;
//   for (var b = 0; b < finalArray.length; b++) {
//     // console.log(finalArray[a]);

//     if (finalArray[b].includes('-')) {
//       console.log('hello you include :', finalArray[b]);
//       console.log(finalArray.indexOf(finalArray[b]));
//       valueIneedToChange = finalArray[b];
//       indexBeforeTheDash = finalArray.indexOf(finalArray[b]);
//     }
//   }
//   if (indexBeforeTheDash !== null) {
//     console.log('index of my pp-----', indexBeforeTheDash);
//     console.log('value i need to change---xx---', valueIneedToChange);
//     var xd = valueIneedToChange.split('');
//     console.log(xd);
//     var changed = null;
//     for (var f = 0; f < xd.length; f++) {
//       if (xd[f] === '-') {
//         console.log('found it here', xd.indexOf(xd[f]));
//         changed = xd.indexOf(xd[f]);
//       }
//     }
//     console.log('change this variable', xd[changed + 1]);
//     var boo = xd[changed + 1];
//     console.log('boo', xd.indexOf(boo));
//     var boo2 = xd.indexOf(boo);
//     xd.splice(boo2, 1, xd[changed + 1].toUpperCase());
//     console.log('current xd-123231', xd.join(''));
//     console.log('xxxxxxxx', finalArray[indexBeforeTheDash]);
//     var upperCaseTheDash = xd.join('');
//     console.log('what i will be replacing it with:-----', upperCaseTheDash);
//     var needThis2 = null;
//     if (finalArray[[indexBeforeTheDash] + 1] !== upperCaseTheDash) {
//       console.log('asdfadsfdfsadfdsfdff no the same');
//       console.log('xxxx where:', finalArray.indexOf(finalArray[indexBeforeTheDash + 1]));
//       needThis2 = finalArray.indexOf(finalArray[indexBeforeTheDash + 1]);
//       console.log('need this for dash', needThis2);
//       console.log('replacing with this', upperCaseTheDash);
//     }
//     if (needThis2) {
//       console.log('123123 getting triggered', needThis2);
//       finalArray.splice(needThis2 - 1, 1, upperCaseTheDash);
//       console.log(finalArray);
//     }
//   }

//   console.log(finalArray.join(' '));
//   return finalArray.join(' ');
// }
