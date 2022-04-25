/* TITLE
Check same case

URL


INSTRUCTIONS


EXAMPLES


*/
function sameCase(a, b){
  if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) return -1
  
  if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) return 1
  
  else return 0
    
    

}