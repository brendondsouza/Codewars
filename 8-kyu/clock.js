/* TITLE
Beginner Series #2 Clock

URL
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

INSTRUCTIONS
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.



EXAMPLES


*/
function past(h, m, s){
  return (h*3600+m*60+s)*1000;
}