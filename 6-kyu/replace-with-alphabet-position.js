/* TITLE
Replace With Alphabet Position

URL
https://www.codewars.com/kata/546f922b54af40e1e90001da

INSTRUCTIONS
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



EXAMPLES


*/
function alphabetPosition(text) {
  let final = ''
  //return text.toLowerCase().split(' ').filter(x=> x!==' ').map(x=> x.split('').map(x=>x.charCodeAt(0)))
for(let char of text){
  if(!(char.toLowerCase() === char.toUpperCase()))
  final += (char.toLowerCase().charCodeAt(0)-96)+" "
}
   return final.trim()
  }