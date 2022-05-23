/* TITLE
Grasshopper - Bug Squashing

URL


INSTRUCTIONS


EXAMPLES


*/
var health = 100
var position = 0
var coins = 0

function main () {
  return [rollDice(), move(), combat(), getCoins(), buyHealth(), printStatus()];
}