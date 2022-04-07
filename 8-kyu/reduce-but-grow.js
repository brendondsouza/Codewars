/* TITLE
Beginner - Reduce but Grow

URL
https://www.codewars.com/kata/57f780909f7e8e3183000078

INSTRUCTIONS
https://www.codewars.com/kata/57f780909f7e8e3183000078

EXAMPLES
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/
function grow(x){
  let prod =1;
x.forEach(item => prod *= item)
  return prod;
}