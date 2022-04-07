/* TITLE
String repeat

URL
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

INSTRUCTIONS
Write a function called repeatStr which repeats the given string string exactly n times.

EXAMPLES
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

function repeatStr (n, s) {
  let mul = ""
  for( let i = 1; i <= n; i++){
    mul += s;
}
  return mul;
}