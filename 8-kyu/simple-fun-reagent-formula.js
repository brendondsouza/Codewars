/* TITLE
Simple Fun #352: Reagent Formula

URL


INSTRUCTIONS


EXAMPLES


*/
function isValid(formula){
  if (formula.includes(1) && formula.includes(2)){
      return false;
  } else if (formula.includes(3) && formula.includes(4)){
    return false;
  } else if (formula.includes(5) && formula.includes(6)){
    return true;
  } else if(formula.includes(5)){
      if (formula.includes(6)){
          return true;
      } else {
          return false;
      }
  } else if(formula.includes(6)){
      if (formula.includes(5)){
          return true;
      } else {
          return false;
      }   
   } else if(formula.includes(7) || formula.includes(8)) {
     return true;
   } else {
     return false;
   }
}