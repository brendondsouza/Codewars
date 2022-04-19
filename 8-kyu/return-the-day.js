/* TITLE
Return the day

URL
https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

INSTRUCTIONS
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

EXAMPLES


*/
function whatday(num) { 
  return num<=7 && num > 0? ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][num-1] : "Wrong, please enter a number between 1 and 7" 
}