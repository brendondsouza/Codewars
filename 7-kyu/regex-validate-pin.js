/* TITLE
Regex validate PIN code

URL


INSTRUCTIONS


EXAMPLES


*/


function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}