/* TITLE
N-th Fibonacci

URL
https://www.codewars.com/kata/522551eee9abb932420004a0

INSTRUCTIONS
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

EXAMPLES
 nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

function nthFibo(n) {
  let arr = [0,1]
 
  for(let i =2; i<n; i++){
    arr[i] = arr[i-2] + arr[i-1]
  } return arr[n-1]
} 