//////////////////////////////////////////
// Beginner Series #4 Cockroach
//////////////////////////////////////////


// URL
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6


// INSTRUCTIONS
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// Examples 
//1.08 --> 30

function cockroachSpeed(s) {
  return Math.floor(s *27.777778)
}