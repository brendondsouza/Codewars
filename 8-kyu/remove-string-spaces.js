/* TITLE
Remove String Spaces

URL
https://www.codewars.com/kata/57eae20f5500ad98e50002c5

INSTRUCTIONS
Simple, remove the spaces from the string, then return the resultant string.

EXAMPLES


*/

function noSpace(x){
  let char = x.split("");
   let word = "";
   for(let i = 0; i < x.length; i++){
   if(char[i] !=" "){
     word +=char[i];
   }
 } return word;
   }