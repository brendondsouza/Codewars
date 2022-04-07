/* TITLE
Find the smallest integer in the array

URL
https://www.codewars.com/kata/55a2d7ebe362935a210000b2

INSTRUCTIONS
Given an array of integers your solution should find the smallest integer.

EXAMPLES
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345

*/

class SmallestIntegerFinder {

  findSmallestInt(arr) {
      let small = arr[0];
    for( let i = 0; i < arr.length; i++){
      if( small > arr[i]){
       small = arr[i];   
  } 
}return small;
  }
  }
