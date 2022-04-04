/* TITLE
Disemvowel Trolls

URL
https://www.codewars.com/kata/52fba66badcd10859f00097e

INSTRUCTIONS
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

EXAMPLES

*/


function disemvowel(str) {
  let newWord = str.split('')
  return newWord.filter(i=> i.toLowerCase() !== 'a' && i.toLowerCase() !== 'e' && i.toLowerCase() !== 'i' && i.toLowerCase() !== 'o' && i.toLowerCase() !== 'u').join('')
}