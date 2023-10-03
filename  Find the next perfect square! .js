function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1) { 
    return -1 
  } 
  else {
    return (Math.sqrt(sq)+1) **2
  }
  
}