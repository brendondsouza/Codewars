/* TITLE
Simple validation of a username with regex

URL


INSTRUCTIONS


EXAMPLES


*/
function validateUsr(username) {
  res =  /^([a-z]|\d|_){4,16}$/.test(username)
  return res
}