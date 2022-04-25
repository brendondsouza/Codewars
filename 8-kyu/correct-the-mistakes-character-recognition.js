/* TITLE
Correct the mistakes of the character recognition software

URL


INSTRUCTIONS


EXAMPLES


*/
function correct(str){
  return str.split('').map(i=> i==='5'? i = 'S' : i==='0'? i = 'O':i==='1' ? i = 'I': i).join('')
   }