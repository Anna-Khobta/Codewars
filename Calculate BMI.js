function bmi(weight, height) {
  let bmi = weight / Math.pow(height,2)
  if (bmi <= 18.5) {
    return "Underweight"
  }
  if (bmi <= 25.0) {
    return "Normal"
  }
  if (bmi <= 30.0) {
    return "Overweight"
  }
  else return "Obese"
}