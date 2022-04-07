/* TITLE
Third Angle of a Triangle

URL
https://www.codewars.com/kata/5a023c426975981341000014

INSTRUCTIONS
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

EXAMPLES


*/
function otherAngle(a, b) {
  return 180-a-b;
}