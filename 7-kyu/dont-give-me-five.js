/* TITLE
Don't give me five!

URL


INSTRUCTIONS


EXAMPLES


*/
function dontGiveMeFive(start, end){
  let arr = []
  for(let i = start; i <= end; i++){
    if(i.toString().split('').every(x=> x!=5))
       { arr.push(i)}
    }

  return arr.length
} 