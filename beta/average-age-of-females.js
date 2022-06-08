/* TITLE
Average Age of Females

URL


INSTRUCTIONS


EXAMPLES


*/
function averageFemale(list){
  return list.filter(x=> x.gender ==='female').reduce((sum,x)=> sum+x.age,0)/list.filter(x=> x.gender ==='female').length || 0
  }