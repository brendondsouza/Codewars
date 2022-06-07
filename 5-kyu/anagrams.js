/* TITLE
Where my anagrams at?

URL


INSTRUCTIONS


EXAMPLES


*/
function anagrams(word, words) {
  return words.filter(x=>x.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join(''))
}