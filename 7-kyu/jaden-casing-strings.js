/* TITLE
Jaden Casing Strings

URL


INSTRUCTIONS


EXAMPLES


*/
String.prototype.toJadenCase = function () {
  return this.split(' ').map(x=> x[0].toUpperCase()+x.slice(1)).join(' ')
};