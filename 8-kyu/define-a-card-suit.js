/* TITLE
Define a card suit

URL
https://www.codewars.com/kata/5a360620f28b82a711000047

INSTRUCTIONS
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

EXAMPLES


*/
function defineSuit(c) {
  return {'♣': 'clubs', '♦': 'diamonds', '♥': 'hearts','♠':'spades'}[c.slice(-1)]
}


function defineSuit(c) {
  return c[c.length-1] == '♣'? 'clubs': c[c.length-1] === '♦'? 'diamonds': c[c.length-1] === '♥'? 'hearts': 'spades'
}