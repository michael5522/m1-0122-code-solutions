// console.log('hi');

function convertMinutesToSeconds(minutes) {
  var answer = minutes * 60;
  return answer;
}
var converted = convertMinutesToSeconds(5);
console.log('converted answer: ', converted);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}
var greeted = greet('Beavis');
console.log('greeting: ', greeted);

function getArea(width, height) {
  var answer = width * height;
  return answer;
}
var three = getArea(17, 42);
console.log('width x height: ', three);

function getFirstName(person) {
  var answer = person.firstName;
  return answer;
}
var four = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('first name: ', four);

function getLastElement(array) {
  return array[array.length - 1];
}
var five = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('get last element: ', five);
