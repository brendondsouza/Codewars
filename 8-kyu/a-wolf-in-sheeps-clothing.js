/* TITLE
A wolf in sheep's clothing

URL


INSTRUCTIONS


EXAMPLES


*/
function warnTheSheep(q) {
  return q.findIndex(x=> x==='wolf') === q.length-1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - q.findIndex(x=> x==='wolf') - 1}! You are about to be eaten by a wolf!`
  }