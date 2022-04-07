/* TITLE
Reversed sequence

URL
https://www.codewars.com/kata/5a00e05cc374cb34d100000d

INSTRUCTIONS
Build a function that returns an array of integers from n to 1 where n>0.

EXAMPLES


*/
const reverseSeq = n => {
  const result = [];
  
  for(let i = n; i > 0; i -= 1) {
    result.push(i);
  }
  
  return result;
};