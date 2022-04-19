/* TITLE
To square(root) or not to square(root)

URL
https://www.codewars.com/kata/57f6ad55cca6e045d2000627

INSTRUCTIONS
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

EXAMPLES


*/
function squareOrSquareRoot(array) {
  return array.map( x => Number.isInteger(Math.sqrt(x))? Math.sqrt(x): Math.pow(x,2))
}