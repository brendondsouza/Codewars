/* TITLE
Simple Interest and Compound Interest

URL


INSTRUCTIONS


EXAMPLES


*/
function interest(P,r,n) {
  return [Math.round(P+(P*n*r)), Math.round(P * Math.pow((1+r),n))]
 }