/* TITLE
Find the Missing Number

URL


INSTRUCTIONS


EXAMPLES


*/
// nums array of numbers with one numver missing
//retru n the missinm number
// [1,2,4,5] 3


function missingNo(nums) {
  //sum ofthe curreent array
  //sum of 100 nos
  //get ther differemce
  let n = nums.length
  let sumOfN = (n * (n+1))/ 2
  let arrSum = nums.reduce((sum,a) => sum + a, 0)
  return sumOfN - arrSum
}