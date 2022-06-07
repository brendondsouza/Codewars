/* TITLE
Sum of the first nth term of Series

URL


INSTRUCTIONS


EXAMPLES


*/
function SeriesSum(n)
{let sum = 0.00
  for(let i = 0; i < n; i++){
    sum += 1/(1+i*3)
  } return sum.toFixed(2)
}