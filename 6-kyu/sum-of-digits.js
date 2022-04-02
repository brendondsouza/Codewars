//////////////////////////////////////////
// Sum of Digits / Digital Root
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/541c8630095125aba6000c00


// INSTRUCTIONS
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples 
// 16  -->  1 + 6 = 7

function digital_root(n) {
  
  let sum = String(n).split('').reduce((sum, item) => sum + Number(item), 0)
 
  return sum < 10? sum: digital_root(sum)
}

// clever solution

function digital_root(n) {
  return (n - 1) % 9 + 1;
}
