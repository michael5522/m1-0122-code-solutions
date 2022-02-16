var colors = ['red', 'white', 'blue'];

console.log('value of 0: ', colors[0]);
console.log('value of 1: ', colors[1]);
console.log('value of 2: ', colors[2]);

console.log('America is ' + colors[0] + ' ' + colors[1] + ' and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ' ' + colors[1] + ' and ' + colors[2] + '.');

console.log('colors array: ', colors);

var students = ['mike', 'bob', 'jo', 'dob'];

var numberOfStudents = students.length;
console.log(`there are ${numberOfStudents} students in the class.`);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('the last student in the array is ', lastStudent);
console.log('value of students: ', students);
