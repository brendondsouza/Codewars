//////////////////////////////////////////
// If you can't sleep, just count sheep!!
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077


// INSTRUCTIONS
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Examples 

var countSheep = function (num){
  let word = ''
  for(let i =1; i <= num; i++){
    word += `${i} sheep...`
  } return word
}