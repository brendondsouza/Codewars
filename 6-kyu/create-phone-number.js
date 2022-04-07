/* TITLE
Create Phone Number

URL
https://www.codewars.com/kata/525f50e3b73515a6db000b83

INSTRUCTIONS
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

EXAMPLES
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/

function createPhoneNumber(numbers){
  let part1 = "";
      part2 = "";
      part3 = "";
  for(i = 0; i < numbers.length; i++){
    if(i<3){
      part1 += numbers[i];
      } else if(i < 6 ){
        part2 += numbers[i];
      } else if(i < 10 ){
        part3 += numbers[i];
    }
    } return (`(${part1}) ${part2}-${part3}`)
  }
