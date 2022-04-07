/* TITLE
Abbreviate a Two Word Name

URL
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

INSTRUCTIONS
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.



EXAMPLES
Sam Harris => S.H

patrick feeney => P.F

*/
const abbrevName = name => name.toUpperCase().split(' ').map(i => i[0]).join('.')