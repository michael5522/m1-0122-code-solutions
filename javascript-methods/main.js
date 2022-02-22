
var a = 1;
var b = 2;
var c = 3;

var maximumValue = Math.max(a, b, c);
console.log('maxiumum value: ', maximumValue);

var heroes = ['superman', 'spiderman', 'wonderman', 'omegaman'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('random index: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero: ', randomHero);

var library = [
  {
    title: 'book1',
    author: 'personA'
  },
  {
    title: 'book2',
    author: 'personB'
  },
  {
    title: 'book3',
    author: 'personC'
  }
];

// console.log(library);
var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

// console.log(library);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
// console.log('js added ', library);

library.unshift(css);
// console.log('added -', library);

library.splice(1, 1);
console.log('current final library: ', library);

// string methods

var fullName = 'Michael Chang';
console.log(fullName);

var firstAndLastName = fullName.split(' ');
console.log('first and last name in array: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('saymyname: ', sayMyName);
