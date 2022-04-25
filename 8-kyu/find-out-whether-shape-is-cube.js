/* TITLE
Find out whether the shape is a cube

URL


INSTRUCTIONS


EXAMPLES


*/
var cubeChecker = function(volume, side){
  return volume <= 0 || side <= 0? false: volume === Math.pow(side,3)
};