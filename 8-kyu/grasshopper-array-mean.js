/* TITLE
Grasshopper - Array Mean

URL


INSTRUCTIONS


EXAMPLES


*/
var findAverage = function (nums) {
  return nums.reduce((sum,a) => sum+a,0)/nums.length
 }