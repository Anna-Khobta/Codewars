function persistence1(num) {
  let count = 0;
  while(num.toString().length > 1){
    num = num.toString().split('').reduce((acc,el)=>acc *= +el,1)
    count++
  }
  return count
}

function persistence2(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

function persistence3(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}