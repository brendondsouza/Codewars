/* TITLE
Array.diff

URL


INSTRUCTIONS


EXAMPLES


*/
function arrayDiff(a, b) {
  return a.filter(x=> !b.includes(x))
}


function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}