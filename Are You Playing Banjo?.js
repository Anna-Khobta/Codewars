function areYouPlayingBanjo(name) {
  let nameArray = name.toLowerCase().split('')
  if (nameArray[0] === 'r') {
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }
}