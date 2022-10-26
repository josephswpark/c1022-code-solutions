function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name);
  console.log(event.target.value);
}

var input = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var message = document.querySelector('#user-message');

input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);
input.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
email.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);

var contact = document.querySelector('#contact-form');
contact.addEventListener('submit', function () {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  var inputByName = {
    name: contact.elements.name.value,
    email: contact.elements.email.value,
    message: contact.elements.message.value
  };
  console.log(inputByName);
  contact.reset();
});
