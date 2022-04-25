/* TITLE
How old will I be in 2099?

URL


INSTRUCTIONS


EXAMPLES


*/
function  calculateAge(a,b) {
  
  return b-a===1? 'You are 1 year old.' : a-b===1? 'You will be born in 1 year.' :a<b? `You are ${b-a} years old.` : a>b? `You will be born in ${Math.abs(b-a)} years.` : 'You were born this very year!'
 
 }
 