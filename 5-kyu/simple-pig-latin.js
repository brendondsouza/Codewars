//////////////////////////////////////////
// 
//Simple Pig Latin
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/50654ddff44f800200000004


// INSTRUCTIONS
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples 
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  
  return str.split(' ').map( item => item !== '?' && item !== '!'? `${item.slice(1)}${item.slice(0,1)}ay`: item).join(' ')

}

//another solution 

function pigIt(str){
 
  let arr = str.split(' ')
  return arr.map( item => item !== '?' && item !== '!'? `${item.slice(1)}${item.slice(0,1)}ay`: item).join(' ')

}


//another solution

function pigIt(str){
 
  let arr = str.split(' ')
  let final = arr.map( item => item !== '?' && item !== '!'? `${item.slice(1)}${item.slice(0,1)}ay`: item).join(' ')

  return final
}