/* TITLE
Duck Duck Goose

URL


INSTRUCTIONS


EXAMPLES


*/
function duckDuckGoose(players, goose) {
  return (players[(goose-1)%(players.length)]).name
 }