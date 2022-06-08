/* TITLE
Cost of Shopping

URL


INSTRUCTIONS


EXAMPLES


*/
const shoppingList = function (items) {
  return items.reduce((sum,x)=> sum+ x.price,0 );
};