/* TITLE
Moving Zeros To The End

URL


INSTRUCTIONS


EXAMPLES


*/
function moveZeros(arr) {
  let a = arr.filter(x=> x!==0)
  for(let i =a.length; i<arr.length; i++){
    a.push(0)
  } return a
    //.join('').padEnd(arr.length,0).split('').map(x=> +x)
}

//another solution

function moveZeros(arr) {
  return arr.filter(x=> x!==0).concat(arr.filter(x=> x===0))
}