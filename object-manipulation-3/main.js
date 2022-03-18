console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player1 = {
  hand: []
};
console.log(player1);

var player2 = {
  hand: []
};
console.log(player2);
var player3 = {
  hand: []
};
console.log(player3);
var player4 = {
  hand: []
};
console.log(player4);

// var cards = [];
// for (suit = 4; suit > 0; suit--) {
//   for (rank = 13; rank > 0; rank--) {
//     cards.push({
//       suit: suit,
//       rank: rank
//     });
//   }
// }

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const cards = [];
for (var s = 0; s < suits.length; s++) {
  for (var v = 0; v < values.length; v++) {
    var suit = suits[s];
    var value = values[v];
    cards.push({ value, suit });
  }
}
console.log(cards);

var ContainerFor8Cards = [];
function randomCards(cards) {
  for (var i = 0; i < 8; i++) {
    var random = Math.floor(Math.random() * 51);
    // console.log('the random # selected', random);
    ContainerFor8Cards.push(cards[random].value);
    // console.log('removing this from array: ', cards[random]);
    cards.splice(random, 1);
    // console.log('the number to be added into the array for container for 8: ', ContainerFor8Cards);
    // console.log('whats left after deleted: ', cards);
  }
}

// console.log('beginning---');
randomCards(cards);
// console.log('distriubte card---s');
// console.log('showing the current cards', ContainerFor8Cards);
distributeCards(ContainerFor8Cards);
function distributeCards(ContainerFor8Cards) {
  // console.log(ContainerFor8Cards.length);
  for (var i = 0; i < ContainerFor8Cards.length; i++) {
    // console.log('hello');
    if (i < 2) {
      // console.log('triggering 1');
      player1.hand.push(ContainerFor8Cards[i]);
      console.log('player1', player1);
    }
    if (i >= 2 && i < 4) {
      // console.log('triggering 2');
      player2.hand.push(ContainerFor8Cards[i]);
      console.log('player2', player2);
    }
    if (i >= 4 && i < 6) {
      // console.log('triggering 3');
      player3.hand.push(ContainerFor8Cards[i]);
      console.log('player3', player3);
    }
    if (i >= 6 && i < 8) {
      // console.log('triggering 4');
      player4.hand.push(ContainerFor8Cards[i]);
      console.log('player4', player4);
    }
  }
}

function delcareWinner(player1, player2, player3, player4) {
  var player1Total = Number(player1.hand[0]) + Number(player1.hand[1]);
  var player2Total = Number(player2.hand[0]) + Number(player2.hand[1]);
  var player3Total = Number(player3.hand[0]) + Number(player3.hand[1]);
  var player4Total = Number(player4.hand[0]) + Number(player4.hand[1]);
  console.log('player1Total:', player1Total);
  console.log('player2Total:', player2Total);
  console.log('player3Total:', player3Total);
  console.log('player4Total:', player4Total);
}
delcareWinner(player1, player2, player3, player4);
