/* TITLE
Crash Override

URL


INSTRUCTIONS


EXAMPLES


*/
function aliasGen(a,b){
  return a[0].toLowerCase() !== a[0].toUpperCase() && b[0].toLowerCase() !== b[0].toUpperCase() ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}` : "Your name must start with a letter from A - Z."
}