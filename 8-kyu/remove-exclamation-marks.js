/* TITLE
Remove exclamation marks

URL
https://www.codewars.com/kata/57a0885cbb9944e24c00008e

INSTRUCTIONS
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

EXAMPLES


*/
function removeExclamationMarks(s) {
  //   return s.split('').filter(i => i !== '!').join
    let word = ''
    for(let i = 0; i < s.length; i++){
      if(s[i] !== '!')
        word += s[i]
    }  return word
  }