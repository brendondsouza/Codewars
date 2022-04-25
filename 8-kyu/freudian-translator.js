/* TITLE
Freudian translator

URL


INSTRUCTIONS


EXAMPLES


*/
function toFreud(str) {
  return str.length === 0? '': str.split(' ').map(x=> x = 'sex').join(' ')
  }