/* TITLE
Find the stray number

URL


INSTRUCTIONS


EXAMPLES


*/
function stray(numbers) {
  let num =  numbers.sort((a,b)=> a-b)
  return num[0] === num[1]? num[num.length-1] : num[0]
}