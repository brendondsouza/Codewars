/* TITLE
Find the vowels

URL


INSTRUCTIONS


EXAMPLES


*/
function vowelIndices(word){
  let vow = 'aeiouyAEIOUY'
  return word.split('').map((x,i) => vow.includes(x)? i+1: -1 ).filter(x => x!= -1)
}