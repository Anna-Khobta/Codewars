function getMiddle(s){
  if (s.length < 2) {
    return s
  }
  if (s.length % 2 === 0) {
    let number1 = s.length / 2 - 1
    let number2 = s.length / 2
    return s[number1] + s[number2]
} else {
  let num3 = Math.floor(s.length / 2)
  return s[num3]
}
}