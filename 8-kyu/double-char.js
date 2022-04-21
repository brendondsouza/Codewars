/* TITLE
Double Char

URL
https://www.codewars.com/kata/56b1f01c247c01db92000076


INSTRUCTIONS
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

EXAMPLES
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/
function doubleChar(str) {
  return str.split('').map(x => x+x).join('')
}