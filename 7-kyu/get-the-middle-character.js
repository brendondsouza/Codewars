//////////////////////////////////////////
// Get the Middle Character
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/56747fd5cb988479af000028


// INSTRUCTIONS
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples 
//Kata.getMiddle("test") should return "es"


function getMiddle(s){
  let len = s.length
 if(len % 2 === 0)
   return `${s[(len/2)-1]}${s[len/2]}`
   else 
   
   return s[Math.ceil(len/2-1)]
}
