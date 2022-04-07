/* TITLE
Beginner Series #3 Sum of Numbers

URL
https://www.codewars.com/kata/55f2b110f61eb01779000053

INSTRUCTIONS
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

EXAMPLES
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

function getSum( a,b )
{ if(a> b) {
  c = a
  d = b
  } else{
    c = b
    d = a}
 
 let sum = 0
   for(let i = d; i <= c; i++){
     sum += i
    
   } return sum
}