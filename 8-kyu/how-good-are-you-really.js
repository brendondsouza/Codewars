/* TITLE
How good are you really?

URL
https://www.codewars.com/kata/5601409514fc93442500010b

INSTRUCTIONS
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

EXAMPLES
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/

function betterThanAverage(classPoints, yourPoints) {
  let sum =0;
  classPoints.forEach(item => sum += item);
  let avg = (sum + yourPoints)/(classPoints.length+1)
  if(avg < yourPoints)
    return true;
  else
    return false;
}