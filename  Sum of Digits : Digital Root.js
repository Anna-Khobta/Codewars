function digitalRoot(n) {
  
  let digits = n.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  
  let sumDigitsMore2 = sum.toString().split("").map(Number);
  if (sumDigitsMore2.length > 1) {
    let firstSumDigit = sumDigitsMore2.slice(0);
    let lastSumDigit = sumDigitsMore2.slice(-1);
    return firstSumDigit[0] + lastSumDigit[0];
  } else {
      return sum;
  }
  }