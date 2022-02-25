/* exported oddOrEven */
function oddOrEven(numbers) {
  var gg = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      gg.push('even');
    } else {
      gg.push('odd');
    }
  }
  return gg;
}
