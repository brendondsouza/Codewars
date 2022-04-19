/* TITLE
Vowel remover

URL
https://www.codewars.com/kata/5547929140907378f9000039

INSTRUCTIONS
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

EXAMPLES
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

*/
function shortcut (string) {
  return string.split(/[aeiou]/g).join('')
}