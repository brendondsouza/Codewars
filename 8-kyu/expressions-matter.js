/* TITLE
Expressions Matter

URL
https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

INSTRUCTIONS
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

EXAMPLES


*/
function expressionMatter(a, b, c) {
  return Math.max(a*(b+c),a*b*c,a+b*c,(a+b)*c, a*b+c, a+b+c)
}