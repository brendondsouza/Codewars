/* TITLE
Smallest Pair Sum

URL


INSTRUCTIONS


EXAMPLES


*/
function smallestPairSum(numbers){
  return numbers.sort((a,b)=> a-b).slice(0,2).reduce((sum,x)=> sum+x,0)
  }