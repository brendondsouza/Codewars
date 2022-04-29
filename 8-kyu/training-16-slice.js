/* TITLE
Training JS #16: Methods of String object--slice(), substring() and substr()

URL


INSTRUCTIONS


EXAMPLES


*/
function cutIt(arr){
  return arr.map(x=> x.slice(0,(Math.min(...arr.map(x=> x.length)))))
  
}