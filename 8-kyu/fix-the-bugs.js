/* TITLE
Fix the Bugs (Syntax) - My First Kata

URL


INSTRUCTIONS


EXAMPLES


*/
function myFirstKata(a,b) {
  if (typeof(a)!=="number" || typeof(b) !== "number") {
    return false
  }else {
   return  a%b + b%a
  }
}