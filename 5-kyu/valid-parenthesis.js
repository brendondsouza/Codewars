/* TITLE
Valid Parentheses

URL
https://www.codewars.com/kata/52774a314c2333f0a7000688

INSTRUCTIONS
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.


EXAMPLES
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true


*/
function validParentheses(parens) {

  const obj = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }
  
  let stack = []
  
  for(let char of parens){
    if(obj[char]){
      stack.push(obj[char])
    } else{
      if(stack.pop() !== char) return false
    } 
  } return (!stack.length)
}