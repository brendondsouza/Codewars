/* TITLE
What is between?

URL
https://www.codewars.com/kata/55ecd718f46fba02e5000029



INSTRUCTIONS
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.



EXAMPLES
a = 1
b = 4
--> [1, 2, 3, 4]

*/
function between(a, b) {
  let arr =[]
  for(let i = a; i <= b; i++){
    arr.push(i)
} return arr}