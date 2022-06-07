/* TITLE
Which are in?

URL


INSTRUCTIONS


EXAMPLES


*/
function inArray(a1,a2){
  let arr =[]
  a2.map(x=> a1.map(y=>x.includes(y) ? arr.push(y): x ))
return [...new Set(arr)].sort()
}