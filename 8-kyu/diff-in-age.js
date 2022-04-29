/* TITLE
Find the Difference in Age between Oldest and Youngest Family Members

URL


INSTRUCTIONS


EXAMPLES


*/
function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)]
  }