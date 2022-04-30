/* TITLE
Tip Calculator

URL


INSTRUCTIONS


EXAMPLES


*/
function calculateTip(amount, rating) {
  const data = {terrible:0,poor:0.05,good:0.10,great:0.15,excellent:0.20}
  if(data.hasOwnProperty(rating.toLowerCase())){
    return Math.ceil(data[rating.toLowerCase()] * amount)
  } else{
    return 'Rating not recognised'
  }
  }