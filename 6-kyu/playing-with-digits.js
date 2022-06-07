/* TITLE
Playing with digits

URL


INSTRUCTIONS


EXAMPLES


*/
function digPow(n, p){
  let num =  n.toString().split('').reduce((sum,x,i)=> sum + Math.pow(x,p++),0)/n
  return Number.isInteger(num)? num:-1
}