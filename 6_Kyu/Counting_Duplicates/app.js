function duplicateCount(text){
    // Check for any capitalized letters
    text = text.toLowerCase()

    // Convert string to array then filter with a function with two parameters
    return text.split('').filter(function (c, i) {
        // Return the length value 
        // Checks if the current character 'c' is the first occurrence of that
        // character in the string 'text.indexOf(c) == i' and if it's not in the
        // last occurance 'text.indexOf(c) != text.lastIndexOf(cc)
        // If both conditions are true, the character is pushed into the new array
      return (text.indexOf(c) == i) && (text.indexOf(c) != text.lastIndexOf(c))
    }).length
  }