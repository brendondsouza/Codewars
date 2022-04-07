/* TITLE
Sum Arrays

URL
https://www.codewars.com/kata/53dc54212259ed3d4f00071c

INSTRUCTIONS
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


EXAMPLES
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

*/

function sum (numbers) {
  let sum =0;

    if(numbers.length === 0){
      return 0;
    } else {
      numbers.forEach(item => sum += item)
      return sum;
    }
    
};