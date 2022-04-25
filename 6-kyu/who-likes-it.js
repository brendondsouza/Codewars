/* TITLE
Who likes it?

URL
https://www.codewars.com/kata/5266876b8f4bf2da9b000362

INSTRUCTIONS
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


EXAMPLES
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/
function likes(names) {
  return names.length === 0?  "no one likes this" : names.length === 1?  names +" likes this": names.length ===2? `${names[0]} and ${names[1]} like this`: names.length ===3 ?`${names[0]}, ${names[1]} and ${names[2]} like this`: `${names[0]}, ${names[1]} and ${names.length-2} others like this`    
}