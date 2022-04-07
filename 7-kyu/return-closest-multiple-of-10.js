/* TITLE
Return the closest number multiple of 10

URL
https://www.codewars.com/kata/58249d08b81f70a2fc0001a4

INSTRUCTIONS
Given a number return the closest number to it that is divisible by 10.

EXAMPLES


*/

const closestMultiple10 = num => {
  return Math.round(num/10)*10
};
