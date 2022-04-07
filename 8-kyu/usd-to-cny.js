/* TITLE
USD => CNY

URL
https://www.codewars.com/kata/5977618080ef220766000022

INSTRUCTIONS
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

EXAMPLES
* 15  -> '101.25 Chinese Yuan'
* 465 -> '3138.75 Chinese Yuan'

*/

function usdcny(usd) {
  let convert = (usd * 6.75).toFixed(2);
  return(`${convert} Chinese Yuan`)
}