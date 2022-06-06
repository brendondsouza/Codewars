/* TITLE
Remove duplicate words

URL


INSTRUCTIONS


EXAMPLES


*/
function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}