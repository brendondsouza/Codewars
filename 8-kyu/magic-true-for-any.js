/* TITLE
Enumerable Magic #2 - True for Any?

URL


INSTRUCTIONS


EXAMPLES


*/
function any(arr, fun){
  return arr.some((v,i)=> fun(v,i))
}