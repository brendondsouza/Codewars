/* TITLE
Are they the "same"?

URL


INSTRUCTIONS


EXAMPLES


*/
function comp(a1, a2){
  console.log(a1,a2)
  if(a1===null || a2===null) {return false}
  else {
return a2.sort((a,b)=> a-b).every((x,i)=> Math.sqrt(x)===a1.sort((a,b)=> a-b)[i]) 
}}