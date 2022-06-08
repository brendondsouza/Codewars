/* TITLE
Create an Explosion!

URL


INSTRUCTIONS


EXAMPLES


*/
JavaScript:
function boomIntensity(n) {
  if(n===1 || n === 0){
    return 'boom'
    }else if(n%10===0){
    return 'B' + "O".repeat(n) + 'M!'
    } else if(n%5===0){
       return 'B' + "O".repeat(n) + 'M'
      }else if(n%2===0){
       return 'B' + "o".repeat(n) + "m!"
       } else{
          return 'B' + 'o'.repeat(n) + 'm'
        }
    }