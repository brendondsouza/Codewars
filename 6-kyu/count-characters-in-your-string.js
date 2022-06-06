/* TITLE
Count characters in your string

URL


INSTRUCTIONS


EXAMPLES


*/
function count (str) {  
  return str.split('').reduce((total,letter)=> {
    total[letter]? total[letter]++ : total[letter]=1;
    return total;
    },{}
  )

}