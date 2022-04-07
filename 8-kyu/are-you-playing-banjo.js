/* TITLE
Are You Playing Banjo?

URL
https://www.codewars.com/kata/53af2b8861023f1d88000832

INSTRUCTIONS
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!


EXAMPLES
name + " plays banjo" 
name + " does not play banjo"

*/
function areYouPlayingBanjo(name) {
  return name[0] === 'R'|| name[0] === 'r'? `${name} plays banjo` : `${name} does not play banjo`
 
}