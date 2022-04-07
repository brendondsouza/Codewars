/* TITLE
Calculate average

URL
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

INSTRUCTIONS
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

EXAMPLES


*/
function find_average(array) {
  let sum = 0;
   let average;
  if(array.length === 0)
    return 0;
  else {
  array.forEach(item => sum += item)
  average = sum/array.length;
  return average;
  }

}