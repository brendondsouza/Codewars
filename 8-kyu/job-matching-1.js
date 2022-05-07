/* TITLE
Job Matching #1

URL


INSTRUCTIONS


EXAMPLES


*/
function match({minSalary}, {maxSalary}) {
  if (!minSalary || !maxSalary) throw new Error('')
  return minSalary*0.9<=maxSalary
  }