function handleClick(event) {
  console.log('button clicked');
  console.log('event obj', event);
  console.log('event target', event.target);
}

var element = document.querySelector('.click-button');

element.addEventListener('click', handleClick);

function handleDoubleClick(event) {
  console.log(' button double clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

var element2 = document.querySelector('.double-click-button');

element2.addEventListener('dblclick', handleDoubleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event target: ', event.target);
}

var element3 = document.querySelector('.hover-button');

element3.addEventListener('mouseover', handleMouseover);
