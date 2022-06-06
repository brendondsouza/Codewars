/* TITLE
Anagram Detection

URL


INSTRUCTIONS


EXAMPLES


*/
function sort(string){
  return string.toLowerCase().split('').sort().join()
}

var isAnagram = function(test, original) {
  console.log(test, original)
  return sort(test) === sort(original)
};