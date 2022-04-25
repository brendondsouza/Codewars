/* TITLE
Is there a vowel in there?

URL


INSTRUCTIONS


EXAMPLES


*/
function isVow(a){
  return a.map(x=> typeof({97:'a', 101:'e', 105:'i', 111:'o', 117:'u'}[x]) === 'string'? {97:'a', 101:'e', 105:'i', 111:'o', 117:'u'}[x]: x )
  }