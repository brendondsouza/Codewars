/* TITLE
How much water do I need?

URL


INSTRUCTIONS


EXAMPLES


*/
const howMuchWater = (W, L, C) => 
  C > 2 * L
    ? 'Too much clothes'
    : (C < L ? 'Not enough clothes' : Number((W * 1.1 ** (C - L)).toFixed(2))) 