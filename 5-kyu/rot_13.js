/* TITLE
Rot13



URL


INSTRUCTIONS


EXAMPLES


*/
function rot13(message){
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  
  return message.split('').map(x=> x.toLowerCase() !== x.toUpperCase() ? output[input.indexOf(x)]: x).join('')
  
  }