/* TITLE
Sum of positive

URL
https://www.codewars.com/kata/5715eaedb436cf5606000381

INSTRUCTIONS
You get an array of numbers, return the sum of all of the positives ones.

EXAMPLES
Example [1,-4,7,12] => 1 + 7 + 12 = 20

*/

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum = sum + arr[i];
    }
  } return sum;
}