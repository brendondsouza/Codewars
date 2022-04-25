/* TITLE
Compare within margin

URL


INSTRUCTIONS


EXAMPLES


*/
function closeCompare(a, b, margin=0){
  return Math.abs(a-b)<=margin? 0: a<b? -1: 1
  console.log(a, b, margin)
}