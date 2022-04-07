/* TITLE
Exes and Ohs

URL
https://www.codewars.com/kata/55908aad6620c066bc00002a

INSTRUCTIONS
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


EXAMPLES
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
  
  
  let word = str.toLowerCase().split('')
  let o = 0
  let x = 0
  for(let i = 0; i < word.length; i++){
    if(word[i]==='x')
      x++
    else if(word[i] === 'o')
      o++
  } return x == o ? true: false

}