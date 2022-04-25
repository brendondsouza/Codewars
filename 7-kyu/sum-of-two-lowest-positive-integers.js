/* TITLE
Sum of two lowest positive integers

URL


INSTRUCTIONS


EXAMPLES


*/
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a-b)
   return numbers[0]+numbers[1]
 }