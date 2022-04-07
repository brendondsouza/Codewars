/* TITLE
Array plus array

URL
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

INSTRUCTIONS
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

EXAMPLES


*/
function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;

   arr1.forEach(item => sum1 += item);
  arr2.forEach(item => sum2 += item);
  return sum1+sum2;

}