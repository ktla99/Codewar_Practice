function isLeapYear(year) {
    // leap years are divisble by 4 and 400
    // leap years are not divisble by 100
    let four = (year / 4);
    let fourHundred = (year / 400);
    let hundred = (year / 100);
    
    if(Number.isInteger(hundred) === true && (Number.isInteger(fourHundred) === false)) {
      return false
    } else if ((Number.isInteger(four) === true) || (Number.isInteger(fourHundred))) {
      return true
    } else {
      return false
    }
  } 
  