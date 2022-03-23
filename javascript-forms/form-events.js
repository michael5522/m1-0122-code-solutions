function handleFocus(event) {
  console.log('1 focus event fired:', event.target.name);
}
function handleBlur(event) {
  console.log('2 blur was fired:', event.target.name);
}

function handleInput(event) {
  console.log('33', event.target.name, event.target.value);
}

var form1 = document.querySelector('#user-name');

var form2 = document.querySelector('#user-email');

var form3 = document.querySelector('#user-message');

form1.addEventListener('focus', handleFocus);
form1.addEventListener('blur', handleBlur);
form1.addEventListener('input', handleInput);

form2.addEventListener('focus', handleFocus);
form2.addEventListener('blur', handleBlur);
form2.addEventListener('input', handleInput);

form3.addEventListener('focus', handleFocus);
form3.addEventListener('blur', handleBlur);
form3.addEventListener('input', handleInput);
