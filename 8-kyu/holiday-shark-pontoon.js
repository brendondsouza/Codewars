/* TITLE
Holiday VI - Shark Pontoon

URL


INSTRUCTIONS


EXAMPLES


*/
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin === true){
    if(pontoonDistance/youSpeed < sharkDistance/(sharkSpeed/2)) {return "Alive!"}
    else {return "Shark Bait!"}
  } else{ 
    if(pontoonDistance/youSpeed < sharkDistance/(sharkSpeed)) {return "Alive!"}
    else {return "Shark Bait!"}
    
  }
   } 