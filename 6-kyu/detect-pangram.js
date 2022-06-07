/* TITLE
u
Detect Pangram

URL


INSTRUCTIONS


EXAMPLES


*/
function isPangram(str){
  let obj =  [...str].filter(x=>x.toLowerCase() != x.toUpperCase()).reduce((total,el) =>   (total[el]? total[el]++:  total[el]=1, total),{})
  return Object.keys(obj).length >=26 
 }