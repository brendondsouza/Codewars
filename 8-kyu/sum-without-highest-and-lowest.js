/* TITLE
Sum without highest and lowest number

URL


INSTRUCTIONS
Task

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.


EXAMPLES
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

*/
function sumArray(arr) {
  if(arr === null || arr === undefined )
    return 0
  else if(arr.length >2)
return (arr.reduce((sum,i) => sum + i, 0))-Math.max(...arr)-Math.min(...arr)
  else
    return 0
}