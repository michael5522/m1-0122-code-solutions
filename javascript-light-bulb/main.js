
var grabBackground = document.querySelector('#one');
var grabSun = document.querySelector('#two');

var counter = 0;
grabSun.addEventListener('click', function () {
  counter++;

  if (counter % 2 !== 0) {
    grabSun.className = 'dark';
    grabBackground.className = 'dark-background';
  } else {
    grabSun.className = 'light';
    grabBackground.className = 'light-background';
  }
});
