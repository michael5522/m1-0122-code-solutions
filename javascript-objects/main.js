var student = {
  firstName: 'Michael',
  lastName: 'Chang',
  age: '32'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log(`fullname: ${fullName}`);

student.livesInIrvine = true;

student.previousOccupation = 'Purcahsing agent';
console.log('live in irvine:', student.livesInIrvine);
console.log('occupation', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'honda',
  model: 'accord',
  year: 2007
};

vehicle['color'] = 'gray';

vehicle['isConvertible'] = false;

console.log('car color:', vehicle['color']);
console.log('convertible?', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'jo',
  type: 'dragon'
};

console.log(pet);

delete pet.name;
delete pet.type;

console.log('pet obj', pet);
