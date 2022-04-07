/* TITLE
Convert number to reversed array of digits

URL
https://www.codewars.com/kata/5583090cbe83f4fd8c000051

INSTRUCTIONS
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

EXAMPLES
348597 => [7,9,5,8,4,3]
0 => [0]

*/

function digitize(n) {
  //   let convert = String(n);
    return n.toString().split('').reverse().map(Number)
  
  }