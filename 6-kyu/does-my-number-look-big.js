/* TITLE
Does my number look big in this?

URL


INSTRUCTIONS


EXAMPLES


*/
function narcissistic(value) {
  console.log(value)
return value.toString().split('').reduce((sum,x)=> sum+Math.pow(+x,value.toString().split('').length),0) ===value }