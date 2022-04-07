/* TITLE
Is it a palindrome?

URL
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

INSTRUCTIONS
Write a function that checks if a given string (case insensitive) is a palindrome.

EXAMPLES


*/

function isPalindrome(x) {
  let word = x.toLowerCase();
   let newWord = word.split("").reverse().join("");
   if( newWord === word)
     return true
   else 
     return false;
 }