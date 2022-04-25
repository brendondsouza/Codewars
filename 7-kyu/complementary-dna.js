/* TITLE
Complementary DNA

URL


INSTRUCTIONS


EXAMPLES


*/
function DNAStrand(dna){
  return dna.split('').map(x=> x==='T'?'A':x==='A'?'T':x==='G'?'C':'G').join('')
}