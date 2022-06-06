/* TITLE
Find the unique number

URL


INSTRUCTIONS


EXAMPLES


*/
function findUniq(arr) {
  let obj = arr.reduce((c,i) => (c[i]? c[i]++: c[i]=1,c),{})
  return +Object.keys(obj).find(key=> obj[key]===1)
}