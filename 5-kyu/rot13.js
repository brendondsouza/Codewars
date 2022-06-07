/* TITLE
ROT13

URL


INSTRUCTIONS


EXAMPLES


*/
function rot13(str) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  
  return str.split('').map(x=> x.toLowerCase() !== x.toUpperCase() ? output[input.indexOf(x)]: x).join('')
  
  }