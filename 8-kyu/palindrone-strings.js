/* TITLE
Palindrome Strings

URL


INSTRUCTIONS


EXAMPLES


*/
function isPalindrome(line) {
  return line === line.split('').reverse().join('')
}