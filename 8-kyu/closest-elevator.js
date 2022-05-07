/* TITLE
Closest elevator

URL


INSTRUCTIONS


EXAMPLES


*/
function elevator(left, right, call){
  return Math.abs(call-left) < Math.abs(call-right) ? "left" : Math.abs(call-left) > Math.abs(call-right) ? 'right': "right"
}

function elevator(left, right, call){
  return Math.abs(call-left) < Math.abs(call-right) ? "left" :'right'
}