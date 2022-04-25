/* TITLE
Exclamation marks series #2: Remove all exclamation marks from the end of sentence

URL


INSTRUCTIONS


EXAMPLES


*/
const remove = str => str[str.length-1] === '!'? remove(str.slice(0,str.length-1)): str