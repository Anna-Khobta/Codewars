const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let x = mpg * fuelLeft
 if (x < distanceToPump ) {
   return false
   }
   else {
     return true
   }
 }
