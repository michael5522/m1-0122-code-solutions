var array = [
  {
    isbn: 111,
    title: 'book1',
    author: 'author1'
  },
  {
    isbn: 222,
    title: 'book2',
    author: 'author2'
  },
  {
    isbn: 333,
    title: 'book3',
    author: 'author3'
  }
];

console.log('the type of the array: ', typeof array);
console.log('json.stringify array: ', JSON.stringify(array));
console.log('typeof json.stringify array: ', typeof JSON.stringify(array));

var jsonString = '{ "name":"mike", "numberId": 5 }';

console.log('typeof jsonString: ', typeof jsonString);

console.log('json parsed', JSON.parse(jsonString));
console.log('json parsed typeof', typeof JSON.parse(jsonString));
