/* TITLE
Number of People in the Bus

URL


INSTRUCTIONS


EXAMPLES


*/
var number = function(bus){
  let sum = 0
//   return bus.reduce((sum,x)=>)
  for(let i = 0; i < bus.length; i++){
      sum += bus[i][0]-bus[i][1]
    } return sum
  }