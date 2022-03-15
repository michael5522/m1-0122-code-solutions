
var modalButton = document.querySelector('#target');

var switchStatus = document.querySelector('#change');

var noButton = document.querySelector('.close');

modalButton.addEventListener('click', function () {
  switchStatus.className = 'modal-open';
});

noButton.addEventListener('click', function () {
  switchStatus.className = 'modal-close';
});
