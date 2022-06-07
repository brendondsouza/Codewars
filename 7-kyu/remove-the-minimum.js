/* TITLE
Remove the minimum

URL


INSTRUCTIONS


EXAMPLES


*/
function removeSmallest(numbers) {
  let min = Math.min(...numbers)
  return numbers.filter((x,i,arr)=> i !== arr.indexOf(min))
}