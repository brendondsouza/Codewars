/* TITLE
Fizz Buzz

URL
https://www.codewars.com/kata/5300901726d12b80e8000498

INSTRUCTIONS
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead


EXAMPLES
fizzbuzz(3) -->  [1, 2, "Fizz"]

*/
function fizzbuzz(n){
  let arr = []
  for(let i = 1; i<=n; i++){
    arr.push(i)
  }
  return arr.map(n=> n%15===0? 'FizzBuzz': n%3==0?'Fizz':n%5===0?'Buzz':n)
}