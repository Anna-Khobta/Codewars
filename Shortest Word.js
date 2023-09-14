function findShort(s){
  let arr = s.split(' ');
  let arrNumbers = arr.map(element => element.length)
  return Math.min.apply(null, arrNumbers)
};

// Simple, given a string of words, return the length of the shortest word(s).