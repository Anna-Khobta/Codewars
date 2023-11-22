let countBits = function(n) {
  let count = 0;
  let num = n.toString(2).split('')
  for (let i = 0; i < num.length; i++) {
   if (num[i] === '1') {
     count++
   }
  }
  return count;
};



let countBits = function(n) {
  let count = 0;
   n.toString(2).split('').forEach(element => {
    if (element === '1') count++;
  });
  return count;
};


countBits = n => n.toString(2).split('0').join('').length;