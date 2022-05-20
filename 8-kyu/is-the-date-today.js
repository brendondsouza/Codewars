/* TITLE
Is the date today

URL


INSTRUCTIONS


EXAMPLES


*/
function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}