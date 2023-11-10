function arrayDiff(array1, array2) {
if(array1.length === 0){return []}
if(array2.length === 0){return array1}

let returnArray = [];
array1.forEach(function included(element){
// If the element is not included in “array2”, push it to “returnArray”
if(!array2.includes(element)) {
  returnArray.push(element)}
})

return returnArray;
}

