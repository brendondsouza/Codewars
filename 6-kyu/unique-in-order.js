/* TITLE
Unique In Order

URL


INSTRUCTIONS


EXAMPLES


*/
var uniqueInOrder=function(iterable){
  return Array.isArray(iterable) === true? iterable.filter((c,i,arr)=> c !== arr[i+1]): iterable.split('').filter((c,i,arr)=> c !== arr[i+1])
}

//other solution

var uniqueInOrder=function(iterable){
  return [...iterable].filter((c,i,arr)=> c !== arr[i+1])
  }