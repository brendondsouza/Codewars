/* TITLE
Count letters in string

URL


INSTRUCTIONS


EXAMPLES


*/
function letterCount(s){
  return [...s].reduce((c,i) => {c[i]? c[i]++: c[i]=1; return c}, {})
}