function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((prev,current)=> prev+current)
}