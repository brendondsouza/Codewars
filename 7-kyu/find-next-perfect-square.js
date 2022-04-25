/* TITLE
Find the next perfect square!

URL


INSTRUCTIONS


EXAMPLES


*/
function findNextSquare(sq) {
  
  return Math.sqrt(sq)%1!==0? -1: Math.pow(Math.sqrt(sq)+1,2)
}