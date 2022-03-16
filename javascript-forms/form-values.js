var contactForm = document.querySelector('#contact-form');
var obj = {};
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  obj.name = contactForm.elements.name.value;
  obj.email = contactForm.elements.email.value;
  obj.message = contactForm.elements.message.value;
  console.log(obj);
  contactForm.reset();
});
