/* TITLE
Ensure question

URL


INSTRUCTIONS


EXAMPLES


*/

function ensureQuestion(s) {
  return s.endsWith('?')? s: s+'?'
  }

  function ensureQuestion(s) {
    return s.charAt(s.length-1)==='?'? s:s+'?'
  }