/* TITLE
Sum of differences in array

URL


INSTRUCTIONS


EXAMPLES


*/
function sumOfDifferences(arr) {
  return arr.sort((a,b)=>b-a).reduce((sum,a,i,arr)=> arr[0]-arr[arr.length-1],0)
}