/* TITLE


URL


INSTRUCTIONS
Persistent Bugger.

EXAMPLES


*/
function persistence(num, acc = 1) {
  if(num<10) {return 0}
  else{
  let sum=num.toString().split('').reduce((a,b) => a * +b,1)
   return sum.toString().length === 1? acc : persistence(sum, acc+1)
    }

}