/* TITLE
Sum of all the multiples of 3 or 5

URL


INSTRUCTIONS


EXAMPLES


*/
function findSum(n) {
  let sum = 0
  for(let i = 0; i <=n ; i++){
  if(i%3=== 0 || i%5===0){
    sum += i
  }
}return sum
  }