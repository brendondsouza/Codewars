/* TITLE
Consecutive items

URL


INSTRUCTIONS


EXAMPLES


*/
//P: arr, a, b 
//R: return true if consecutive, else false
//E: 

function consecutive(arr, a, b) {
  //   check occurance of b
  //   if found chech if the previous or next indexVALUE IS B
  //   if yes return true, else return false
    let aIndex = arr.indexOf(a)
    if(arr.indexOf(b) === aIndex+1 || arr.indexOf(b) === aIndex -1){
       return true
       } else{
      return false
    }
    
    
  }
  
  // consecutive([1,2,3,4], 2,3) return true
  // consecutive([1,2,3,4], 1,3) return false
  // consecutive([1,2,3,4], 3,2) true 