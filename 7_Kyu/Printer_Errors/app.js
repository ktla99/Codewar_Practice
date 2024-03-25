function printerError(s) {
    let convertToArr = s.split("");
    let numberOfString = s.length;  
    // console.log(convertToArr)
    let stringArr = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    // Find how many with .length there are that are errors
    let findErrors = convertToArr.filter(item => !stringArr.includes(item));
    let result = numberOfString - findErrors.length;
    return `${result}/${numberOfString}`
    
    console.log(findErrors.length)
    
  }