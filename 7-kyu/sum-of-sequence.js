/* TITLE
Sum of a sequence

URL


INSTRUCTIONS


EXAMPLES


*/
const sequenceSum = (begin, end, step) => {
  let arr = []
  for(let i = begin; i <= end; i+= step){
    arr.push(i)
  } return arr.reduce((sum,x) => sum+x,0)
};