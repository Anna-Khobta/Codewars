function getSum(a, b) {
   if (a === b) {
     return a
   }
  let result = 0
  if ( a < b ) {
    for (let i = a; i <= b; i++ ) {
      result += i
    }
    return result
  }
  else {
    for (let i = b; i <= a; i ++) {
       result += i
    }
    return result
    }
}



// const GetSum = (a, b) => {
//  let min = Math.min(a, b),
//      max = Math.max(a, b);
//  return (max - min + 1) * (min + max) / 2;
// }