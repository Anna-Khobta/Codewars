function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  
return dna.replace(/T/g, "U");
}


function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}