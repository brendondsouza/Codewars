/* TITLE
Can we divide it?

URL
https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

INSTRUCTIONS
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

EXAMPLES


*/
function isDivideBy(number, a, b) {
  if(number % a === 0 && number % b === 0)
    return true
  else
    return false
}