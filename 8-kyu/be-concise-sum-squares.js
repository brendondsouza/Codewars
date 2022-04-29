/* TITLE
Be Concise III - Sum Squares

URL


INSTRUCTIONS


EXAMPLES


*/
function sumSquares(array) {
  return array.reduce((sum,a)=> sum + a**2,0)
}