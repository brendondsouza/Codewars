/* TITLE
Money, Money, Money

URL


INSTRUCTIONS


EXAMPLES


*/

// P: principal, interest, tax, desired
// R: return number of years
// E
// P:


function calculateYears(principal, interest, tax, desired) {
  //     calculate the interest earned for that year
  //     deduct tax from interest
  //     use remaining total as new principal for the next year
  //     reinvert till principal >= desired
    let count = 0
    while(principal < desired){
    let int = principal * interest 
    let afterTaxEarnings = int * (1-tax)
    principal += afterTaxEarnings
      count++
      } return count
    
  }
  
  // calculateYears(1000, 0.05, 0.18, 1100) return 3
  // return 0