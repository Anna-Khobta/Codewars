function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1) { 
    return -1 
  } 
  else {
    return (Math.sqrt(sq)+1) **2
  }
  
}



function findNextSquare(sq) {
  return Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// Math.pow(base, exponent) 
// base = Основание степени; exponent  = Показатель степени, в которую возводится основание base.