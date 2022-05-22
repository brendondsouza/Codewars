/* TITLE
Adding Arrays

URL


INSTRUCTIONS


EXAMPLES


*/
function arrAdder(arr) {
  let word =""
  for(let i = 0; i < arr[0].length; i++){
    for(let j = 0; j < arr.length; j++){
      word += arr[j][i]
    
  } word += ' '

} return word.slice(0,-1)
  }