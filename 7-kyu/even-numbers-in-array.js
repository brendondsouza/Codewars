/* TITLE
Even numbers in an array

URL


INSTRUCTIONS


EXAMPLES


*/
function evenNumbers(array, number) {
  return array.filter(x=> x%2===0).slice(-number)
}