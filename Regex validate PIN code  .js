function validatePIN (pin) {
   return /^(\d{4}|\d{6})$/.test(pin);
}

// the entire regular expression ^(\d{4}|\d{6})$ will match strings that are either exactly 4 digits or exactly 6 digits in length and nothing more or less

// This is a method on RegExp objects that tests for a match in a string. It returns true if there's a match and false otherwise. So, the method will test the pin against the provided regular expression