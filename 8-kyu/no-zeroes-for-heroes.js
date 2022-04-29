/* TITLE
No zeros for heros

URL


INSTRUCTIONS


EXAMPLES


*/
function noBoringZeros(n) {
  return n===0? 0: n%10===0? noBoringZeros(n/10):n
}