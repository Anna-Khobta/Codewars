function openOrSenior(data){
  let result = []
  for (let i = 0; i < data.length; i ++) {
    if (data[i][0] >= 55) {
      if (data[i][1] > 7) {
        result.push('Senior')
      } else {
        result.push('Open')
      }
    } else {
       result.push('Open')
    }
  }
  return result
}



// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
