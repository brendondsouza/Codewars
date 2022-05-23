/* TITLE
Training JS #32: methods of Math---round() ceil() and floor()

URL


INSTRUCTIONS


EXAMPLES


*/
function roundIt(n){
  let num = n.toString().split('.')
  if(num[0].length<num[1].length) {return Math.ceil(n) }
   else if(num[0].length>num[1].length) {return Math.floor(n) }
   else if(num[0].length===num[1].length) {return Math.round(n) }
   
 }