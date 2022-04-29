/* TITLE
Simple Fun #261: Whose Move

URL


INSTRUCTIONS


EXAMPLES


*/
function whoseMove(lastPlayer, win) {
  return (lastPlayer==='black' && win===false) || (lastPlayer==='white' && win===true)? 'white' : 'black' 
  
  
}