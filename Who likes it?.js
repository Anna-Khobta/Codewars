function likes(names) {
 if (names.length < 1) {
   return "no one likes this"
 }
 if (names.length < 2) {
   return names[0] + ' likes this'
 }
  if (names.length < 3) {
   return names[0] + ' and ' + names[1] + ' like this'
 }
   if (names.length < 4) {
   return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
 }
    if (names.length > 3 ) {
      let num = names.length - 2 
   return names[0] + ', ' + names[1] + ' and ' + num +  ' others like this'
 }
}

function likes2(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}


function likes3(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}