/* TITLE
Get number from string

URL


INSTRUCTIONS


EXAMPLES


*/
function getNumberFromString(s) {
  return Number(s.split('').filter(x=> Number.isInteger(parseInt(x))).join(''))
  console.log(s)
}