/* TITLE
Drink about

URL
https://www.codewars.com/kata/56170e844da7c6f647000063

INSTRUCTIONS
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

EXAMPLES
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/
function peopleWithAgeDrink(old) {
  return old<14?"drink toddy": old<18?"drink coke": old<21?"drink beer":"drink whisky"
  }