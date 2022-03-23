/* eslint-disable no-console */
var tabContainer = document.querySelector('.tab-container');
// console.log(tabContainer);

var tabAll = document.querySelectorAll('.tab');
// console.log(tabAll);

var viewAll = document.querySelectorAll('.view');
// console.log(viewAll);
// console.log('--------');
tabContainer.addEventListener('click', function (event) {
  // console.log(event.target);
  // console.log('0000000');
  if (event.target.matches('.tab')) {
    // console.log('it matches');
    // console.log(event.target);
    for (var i = 0; i < tabAll.length; i++) {
      if (tabAll[i] !== event.target) {
        tabAll[i].classList.remove('active');
      } else {
        tabAll[i].classList.add('active');
      }
    }

    var dataView = event.target.getAttribute('data-view');
    // console.log('data view: ', dataView);
    for (var j = 0; j < viewAll.length; j++) {
      if (dataView !== viewAll[j].getAttribute('data-view')) {
        // console.log('111', viewAll[j]);
        viewAll[j].classList.add('hidden');
      } else {
        viewAll[j].classList.remove('hidden');
        // console.log('222', viewAll[j]);
      }
    }
  }
});
