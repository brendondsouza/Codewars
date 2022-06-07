/* TITLE
Reverse every other word in the string

URL


INSTRUCTIONS


EXAMPLES


*/


function reverse(str){
  return str.split(' ').map((x,i)=> i%2!=0? x.split('').reverse().join(``):x).join(' ').trim()
}