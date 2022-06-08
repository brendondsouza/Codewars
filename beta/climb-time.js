/* TITLE
Climb Time - Can you send it?

URL


INSTRUCTIONS


EXAMPLES


*/
function canClimb(ropeLength,climbHeight){
  console.log(ropeLength,climbHeight)
 return isNaN(ropeLength)?  null: isNaN(climbHeight)? null: ropeLength * 3.28084  >= climbHeight * 2
}