/* TITLE
Isograms

URL


INSTRUCTIONS


EXAMPLES


*/
function isIsogram(str){
  const dups = [...new Set(str.toLowerCase().split(''))]
 return dups.length === str.split('').length
}