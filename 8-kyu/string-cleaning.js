/* TITLE
String cleaning

URL
https://www.codewars.com/kata/57e1e61ba396b3727c000251

INSTRUCTIONS
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

EXAMPLES
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

*/

function stringClean(s){
  return s.split('').filter((n) => n != parseInt(n)).join('');
}

function stringClean(s){
  return s.replace(/\d/g, "");
}