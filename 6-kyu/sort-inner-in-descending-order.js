/* TITLE
Srot the inner ctonnet in dsnnieedcg oredr

URL


INSTRUCTIONS


EXAMPLES


*/
function sortTheInnerContent(words){
  console.log(words)
  return words.split(' ').map((x,i,arr)=> x.length < 4? x:x[0] + x.slice(1,-1).split('').sort().reverse().join('') + x[x.length-1]).join(' ')
  
    //i===0 || i === arr.length ? x : x[arr.length-i+1])
}