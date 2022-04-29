/* TITLE
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

URL


INSTRUCTIONS


EXAMPLES


*/
function replace(s){
  return s.split('').map(x=> 'aeiouAEIOU'.includes(x)? '!': x).join('')
   
 }