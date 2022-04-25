/* TITLE
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

URL


INSTRUCTIONS


EXAMPLES


*/
String.prototype.toAlternatingCase = function () {
  return this.split('').map(x=> x === x.toLowerCase()? x.toUpperCase():x.toLowerCase()).join('')
}