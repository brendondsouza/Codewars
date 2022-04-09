/* TITLE
Round up to the next multiple of 5

URL
https://www.codewars.com/kata/55d1d6d5955ec6365400006d

INSTRUCTIONS
Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

EXAMPLES


*/

function roundToNext5(n){
  if(n%5 !== 0){
    return (Math.floor(n/5)+1)*5
  }
  else
    return n
}