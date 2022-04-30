/* TITLE
Determine offspring sex based on genes XX and XY chromosomes

URL


INSTRUCTIONS


EXAMPLES


*/
function chromosomeCheck(sperm) {
  return sperm.includes('XX')? "Congratulations! You're going to have a daughter.": "Congratulations! You're going to have a son."
}