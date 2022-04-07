/* TITLE
Vowel Count

URL
https://www.codewars.com/kata/54ff3102c1bad923760001f3

INSTRUCTIONS
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


EXAMPLES


*/

function getCount(str) {
  var vowelsCount = 0;
  for(let i=0; i< str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}