/* TITLE
function product(a,b){
  
  if(a+1>=b){
     console.log(a,b)
      return 'Error'
  } else{
    let arr =[]
    for(let i = a; i < b; i++){
      arr.push(i)
    }
  return arr.reduce((prod,x)=> prod*x,1)/a
    }
}

URL


INSTRUCTIONS


EXAMPLES


*/
function product(a,b){
  
  if(a+1>=b){
     console.log(a,b)
      return 'Error'
  } else{
    let arr =[]
    for(let i = a; i < b; i++){
      arr.push(i)
    }
  return arr.reduce((prod,x)=> prod*x,1)/a
    }
}