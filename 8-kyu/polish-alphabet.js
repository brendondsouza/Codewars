/* TITLE
Polish alphabet

URL


INSTRUCTIONS


EXAMPLES


*/
function correctPolishLetters (string) {
  const words = {ą:'a', ć:'c',ę:'e',ł:'l',ń:'n',ó:'o',ś:'s',ź:'z',ż:'z'}
  return string.split('').map(x=> words.hasOwnProperty(x)? words[x] : x).join('')
}