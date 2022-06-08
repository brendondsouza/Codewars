/* TITLE
Count the likes

URL


INSTRUCTIONS


EXAMPLES


*/
var evalLikes = function(words){
  return words.filter(x=> x.toLowerCase()==='like').length / words.length > 0.05 
  }