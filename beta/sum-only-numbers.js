/* TITLE
Sum Only Numbers

URL


INSTRUCTIONS


EXAMPLES


*/
function sumNumbers() {
  let sum = 0
for(let i = 0; i < arguments.length; i++){
  if(typeof(arguments[i])==='number'){
  sum+=arguments[i]
}
}return sum
}