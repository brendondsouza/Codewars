/* TITLE
Count of positives / sum of negatives

URL
https://www.codewars.com/kata/576bb71bbbcf0951d5000044

INSTRUCTIONS
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

EXAMPLES
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
 
  let count = 0;
  let sum = 0;
   
  if( input === null || input.length === 0){
    return [];
  } else {
  for( let i = 0; i < input.length; i++){
    if(input[i] > 0){
      count++;
    } 
    if(input[i] < 0){
      sum +=input[i];
    }
  }
  let final = [count,sum];
    return final;
}}