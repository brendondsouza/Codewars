/* TITLE
Minimize Sum Of Array (Array Series #1)

URL


INSTRUCTIONS


EXAMPLES


*/
function minSum(arr) {
  let sort = arr.sort((a,b)=>a-b)
   let sum = 0
   for(let i = 0; i < arr.length/2; i++){
     sum += sort[i]*sort[sort.length - i-1]
   }
   return sum
 }