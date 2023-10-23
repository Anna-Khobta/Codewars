function reverseWords(str) {
 return str.split("").reverse().join("").split(" ").reverse().join(" ");
}



function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


function reverseWords(str) {
  return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
}