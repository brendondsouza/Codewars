/* TITLE
Is There an Odd Bit?

URL


INSTRUCTIONS


EXAMPLES


*/
function anyOdd(x) {
  return x.toString(2).split('').reverse().filter((x,i) => (x === '1' && i%2===1)).length > 0? 1:0
 }