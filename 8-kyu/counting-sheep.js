/* TITLE
Counting sheep...

URL
https://www.codewars.com/kata/54edbc7200b811e956000556

INSTRUCTIONS
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

EXAMPLES
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

*/

function countSheeps(arrayOfSheep) {
  let count =0;
  for( let i = 0; i <= arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      count++;
    }
  } return count;
}