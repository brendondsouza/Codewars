/* TITLE
Calculate BMI

URL
https://www.codewars.com/kata/57a429e253ba3381850000fb

INSTRUCTIONS
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"


EXAMPLES


*/

function bmi(weight, height){
  return (weight/(height*height)) <= 18.5 ? "Underweight" : (weight/(height*height)) <= 25? "Normal": (weight/(height*height)) <= 30? "Overweight": "Obese" 
}