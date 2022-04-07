/* TITLE
Highest and Lowest

URL
https://www.codewars.com/kata/554b4ac871d6813a03000035

INSTRUCTIONS
n this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

EXAMPLES
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow(numbers){
  num=numbers.split(' ');
  var max = parseInt(num[0]);
  var min = parseInt(num[0]);
  for (var i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) > max){
      max = parseInt(num[i]);
    }
  }
  for (var i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) < min){
      min = parseInt(num[i]);
    } 
 }
 return (max + " " + min);
}
