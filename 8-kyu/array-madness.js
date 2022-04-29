/* TITLE
SpeedCode #2 - Array Madness

URL


INSTRUCTIONS


EXAMPLES


*/
function arrayMadness(a, b) {
  return a.reduce((s,x)=>s+x**2,0) > b.reduce((s,x) => s+x**3,0)
}