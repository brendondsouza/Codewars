/* TITLE
Short Long Short

URL
https://www.codewars.com/kata/50654ddff44f800200000007

INSTRUCTIONS
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

EXAMPLES
("1", "22") --> "1221"
("22", "1") --> "1221"

*/

const solution= (a, b) => a.length<b.length? a+b+a : b+a+b

//another solution

function solution(a, b){
  if(a.length < b.length)
    return `${a}${b}${a}`
    else 
      return `${b}${a}${b}`
      
}