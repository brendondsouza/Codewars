/* TITLE
Find the missing letter


URL


INSTRUCTIONS


EXAMPLES


*/
function findMissingLetter(arr)
{
  return String.fromCharCode(arr.map((x,i,arr)=> x.charCodeAt(0)).find((x,i,arr)=> arr[i+1]!=arr[i]+1)+1)
}