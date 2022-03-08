console.log('hello world');
var query = document.querySelector('h1');
console.log('h1:', query);

console.dir(query);

var idExplanation = document.querySelector('#explanation');
console.log('id explanation: ', idExplanation);

console.dir(document.querySelector('#explanation'));

console.log(document.querySelector('.hint'));

console.dir(document.querySelector('.hint'));

console.log('paragraphs: ', document.querySelectorAll('p'));

console.log('example-link: ', document.querySelectorAll('.example-link'));
