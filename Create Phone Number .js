function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
}




function createPhoneNumber2(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}


function createPhoneNumber3(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}