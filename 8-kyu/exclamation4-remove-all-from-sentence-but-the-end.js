/* TITLE
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

URL


INSTRUCTIONS


EXAMPLES


*/
function remove (string) {
  return string.split('').filter(x=> x!== '!').join('') + '!'
 
}