/* TITLE
Summing a number's digits

URL


INSTRUCTIONS


EXAMPLES


*/
function sumDigits(number) {
  //take number, split into ondividual digits
  //convert to positive number
  //add to a sum cariable
  let sum = 0
  number = Math.abs(number)
  while(Math.floor(number)>0){
  sum += number%10
number = Math.floor(number/10)
    } return sum
}