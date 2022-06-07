/* TITLE
Two to One

URL


INSTRUCTIONS


EXAMPLES


*/
function longest(s1, s2) {
  return [...new Set(s1+s2)].sort().join('')
}