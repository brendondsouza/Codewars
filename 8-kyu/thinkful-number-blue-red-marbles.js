/* TITLE
Thinkful - Number Drills: Blue and red marbles

URL


INSTRUCTIONS


EXAMPLES


*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart-bluePulled)/((blueStart-bluePulled)+(redStart-redPulled))
 }