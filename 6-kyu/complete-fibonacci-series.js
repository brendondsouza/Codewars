//////////////////////////////////////////
// Complete Fibonacci Series
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/5239f06d20eeab9deb00049b


// INSTRUCTIONS
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

// Examples 
//fibonacci(4) // should return  [0,1,1,2]

function fibonacci(n) {
  let arr =[0,1]
if(n<=0)
  return []
else{
   for(let i = 2; i< n; i++){
    arr.push(arr[i-2]+arr[i-1])
  }} return arr
}
