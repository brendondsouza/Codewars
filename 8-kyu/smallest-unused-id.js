/* TITLE
Smallest unused ID

URL


INSTRUCTIONS


EXAMPLES


*/
function nextId(ids){
  return  [...new Set(ids)].sort((a,b)=> a-b).findIndex((x,i) => x!==i) >=0? [...new Set(ids)].sort((a,b)=> a-b).findIndex((x,i) => x!==i): [...new Set(ids)].length
}