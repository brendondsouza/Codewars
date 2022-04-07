/* TITLE
Area of a Square

URL
https://www.codewars.com/kata/5748838ce2fab90b86001b1a

INSTRUCTIONS
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.



EXAMPLES


*/

const squareArea = A => Number(((2 * A / 3.1416)**2).toFixed(2))