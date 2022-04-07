/* TITLE
Remove First and Last Character

URL
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

INSTRUCTIONS
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

EXAMPLES


*/

function removeChar(str){
 let word = ""
  let check = str.split("");
  for(let i = 0; i < check.length; i++){
    if(i === 0 || i === check.length-1){
      continue;
      }else{
        word += check[i];
  }}
  return word;

};
