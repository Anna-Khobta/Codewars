function grow(x){
let result = 1
for (let i = 0; i <x.length; i++) {
  result *= x[i]
}
  return result 
}



// var2
// function grow(x){
//  return x.reduce((a, b)=> a * b,1);
// }