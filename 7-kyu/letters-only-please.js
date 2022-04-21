/* TITLE
Letters only, please!

URL
https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d

INSTRUCTIONS
Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

Write a function that takes a string and returns a string without the unnecessary characters.

EXAMPLES
removeChars('.tree1')    ==> 'tree'

removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

*/
function removeChars(s) {
  return s.split('').filter(x=> x.toLowerCase() !== x.toUpperCase() || x === ' ').join('')
}