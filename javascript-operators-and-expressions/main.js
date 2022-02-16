
var width = 1;
var height = 2;

var area = width * height;

console.log('area: ', area);
console.log('type of area: ', typeof area);

var bill = 5;
var payment = 10;

var change = payment - bill;
console.log('change: ', change);
console.log('type of change: ', typeof change);

var quizzes = 50;
var midterm = 25;
var final = 100;

var grade = quizzes + midterm + final;
console.log('grade: ', grade);
console.log('type of grade: ', typeof grade);

var firstName = 'Michael';
var lastName = 'Chang';
var fullname = `${firstName} ${lastName}`;
console.log('fullname: ', fullname);
console.log('typeof fullname: ', typeof fullname);

var pH = 2;
var isAcidic = pH < 7;
console.log('t or f: ', isAcidic);
console.log('type of solution: ', typeof isAcidic);

var headCount = 302;
var isSparta = (headCount === 300);
console.log('t or f: ', isSparta);
console.log('type of isSparta: ', typeof isSparta);

var motto = fullname += ' is the GOAT';
console.log('value of motto: ', motto);
console.log('type of:', typeof motto);
