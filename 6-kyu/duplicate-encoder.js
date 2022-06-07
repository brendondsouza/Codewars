/* TITLE
Duplicate Encoder

URL


INSTRUCTIONS


EXAMPLES


*/
function duplicateEncode(word){
  return word.toLowerCase().split('').map((x,i,arr) => arr.indexOf(x)===arr.lastIndexOf(x)? '(' : ')').join('')
}