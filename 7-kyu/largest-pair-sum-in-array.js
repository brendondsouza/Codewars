/* TITLE
Largest pair sum in array

URL


INSTRUCTIONS


EXAMPLES


*/
function largestPairSum (n) {
  
  let arr = n.sort((a,b)=> b-a)
  return arr[0]+ arr[1]
 }