/* TITLE
Name Shuffler

URL
https://www.codewars.com/kata/559ac78160f0be07c200005a

INSTRUCTIONS
Write a function that returns a string in which firstname is swapped with last name.

EXAMPLES
nameShuffler('john McClane'); => "McClane john"

*/
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}