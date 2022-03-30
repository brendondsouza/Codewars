//////////////////////////////////////////
// Reversed Strings
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018


// INSTRUCTIONS
// Complete the solution so that it reverses the string passed into it.

// Examples 
//'world'  =>  'dlrow'

function solution(str){
  return str.split("").reverse("").join("");
}