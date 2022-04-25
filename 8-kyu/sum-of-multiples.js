/* TITLE
Sum of Multiples

URL


INSTRUCTIONS


EXAMPLES


*/
function sumMul(n,m){
  let sum = 0
if(m<0 || n ===0 || m ===0) {return 'INVALID'}
else{
for(let i = 1; i <= m/n; i++){
 sum = sum + (n*i)
}
}
return sum
}