function evenOrOdd(number) {
    let positiveOnly = Math.abs(number);
    if((positiveOnly % 2) !== 0) {
      return "Odd"
    } else {
      return "Even";
    }
  }