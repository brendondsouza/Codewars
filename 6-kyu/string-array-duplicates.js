/* TITLE
String array duplicates

URL
https://www.codewars.com/kata/59f08f89a5e129c543000069

INSTRUCTIONS
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.



EXAMPLES
dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

*/
function dup(s) {
  return s.map(p=>p.split('').filter((x,i,arr)=> arr[i]!==arr[i+1]).join(''))
};