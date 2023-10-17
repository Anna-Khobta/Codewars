function printerError(s) {
  let result = 0
  for (let index in s) {
    if (s[index] > 'm') {
      result ++
    }
  }
  return result + '/' + s.length

}