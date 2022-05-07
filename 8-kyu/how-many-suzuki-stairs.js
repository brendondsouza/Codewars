/* TITLE
How many stairs will Suzuki climb in 20 years?

URL


INSTRUCTIONS


EXAMPLES


*/
function stairsIn20(s){
  return s.reduce((sum,x) => sum.concat(x),[]).reduce((sum,x)=> sum+x,0) * 20
}