/* TITLE
ASCII Total

URL


INSTRUCTIONS


EXAMPLES


*/
function uniTotal (str) {
  return str.split('').reduce((sum,x) => sum + x.charCodeAt(),0)
  }