
var domElements = document.querySelectorAll('span');

domElements[0].classList.add('underline');

var newArray = [];
for (var i = 0; i < domElements.length; i++) {
  newArray.push(domElements[i].textContent);
}
// console.log(newArray);
var counter = 0;
document.addEventListener('keydown', function (event) {
  // console.log('key pressed');
  // console.log('  event.key:', event.key);

  if (event.key === domElements[counter].textContent) {
    // console.log(domElements[counter]);
    domElements[counter].classList.add('green', 'underline');
    counter++;
    // console.log('after added', counter);
  } else {
    domElements[counter].classList.add('red', 'underline');
  }
});

document.addEventListener('keyup', function () {
  domElements[counter - 1].classList.remove('underline');
});
