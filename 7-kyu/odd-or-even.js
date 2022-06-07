/* TITLE
Odd or Even?

URL


INSTRUCTIONS


EXAMPLES


*/
function oddOrEven(arr) {
  return arr.reduce((sum,x)=> sum+x,0)%2===0? 'even': 'odd'
  }