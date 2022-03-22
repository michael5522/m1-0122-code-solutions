
var click = document.querySelector('.task-list');
click.addEventListener('click', function (event) {
  console.log('event target: ', event.target);
  console.log('event target tagname: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var target = event.target.closest('.task-list-item');
    console.log('CLOSEST', event.target.closest('.task-list-item'));
    target.remove();
  }
});
