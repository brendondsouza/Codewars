/* TITLE
Sum Mixed Array

URL


INSTRUCTIONS


EXAMPLES


*/
function sumMix(x){
  return x.map(x => +x).reduce((a,b) => a+b, 0)
 }